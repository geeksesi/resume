#!/usr/bin/env node
/* Node-only renderer. Typography, labels, ordering, A4 margins, and fonts mirror
 * src/components/MinimalLayout/{index,style}. This CJS implementation avoids Gatsby's
 * JSX/asset loader while retaining the MinimalLayout resume-data contract. */
const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");
const React = require("react");
const { Document, Page, Text, View, Link, StyleSheet, Font, renderToBuffer } = require("@react-pdf/renderer");
const root = fs.realpathSync(path.resolve(__dirname, ".."));
const h = React.createElement;
const STOPWORDS = new Set("a an and are as at be by for from in is it of on or that the to with we you your our will this their they role job work work".split(" "));
const tokenise = (text) => (String(text).toLowerCase().match(/[a-z0-9+#.]+/g) || []).filter((word) => word.length > 1 && !STOPWORDS.has(word));
const requireRegularProjectFile = (candidate) => {
  if (!candidate) throw new Error("Usage: npm run tailor -- path/to/job-description.md");
  let real;
  try { real = fs.realpathSync(path.resolve(root, candidate)); } catch { throw new Error("Job description must be an existing regular file inside this project."); }
  if (!real.startsWith(`${root}${path.sep}`) || !fs.statSync(real).isFile()) throw new Error("Job description must be an existing regular file inside this project.");
  return real;
};
const phraseScore = (text, job, tokens) => {
  const haystack = String(text).toLowerCase(); let score = 0;
  for (const token of tokens) if (haystack.includes(token)) score += 1;
  for (const phrase of job.toLowerCase().match(/\b[a-z][a-z0-9+#.]+(?:\s+[a-z][a-z0-9+#.]+){1,2}\b/g) || []) if (!STOPWORDS.has(phrase) && haystack.includes(phrase)) score += 3;
  return score;
};
const rank = (items, text, job, tokens) => items.map((item, index) => ({ item, index, score: phraseScore(text(item), job, tokens) })).sort((a, b) => b.score - a.score || a.index - b.index);
const selected = (ranked, max, fallback) => {
  const relevant = ranked.filter((entry) => entry.score > 0).slice(0, max);
  return relevant.length ? relevant : (fallback ? ranked.slice(0, Math.min(max, fallback)) : []);
};
function validateMaster(master) {
  const required = ["name", "title", "location", "contact", "social", "hardSkills", "about", "experiences", "projects"];
  if (!master || required.some((key) => master[key] === undefined) || !Array.isArray(master.experiences) || !Array.isArray(master.projects)) throw new Error("Canonical master profile is malformed.");
}
function assertGrounded(resume, master) {
  const exact = (items, authority, label) => { for (const item of items) if (!authority.includes(item)) throw new Error(`Ungrounded ${label}: ${item}`); };
  ["name", "title", "location", "about"].forEach((key) => { if (resume[key] !== master[key]) throw new Error(`Ungrounded ${key}`); });
  exact(resume.hardSkills, master.hardSkills, "skill");
  for (const key of ["contact", "social", "experiences", "projects"]) for (const entity of resume[key]) {
    const source = master[key].find((candidate) => JSON.stringify(candidate) === JSON.stringify(entity) || (key === "experiences" && candidate.company === entity.company) || (key === "projects" && candidate.title === entity.title));
    if (!source) throw new Error(`Ungrounded ${key} entity`);
    for (const field of Object.keys(entity)) {
      if ((key === "experiences" && ["responsibilities", "technologies"].includes(field)) ? !entity[field].every((value) => source[field].includes(value)) : JSON.stringify(entity[field]) !== JSON.stringify(source[field])) throw new Error(`Ungrounded ${key}.${field}`);
    }
  }
}
Font.register({ family: "Rubik", src: path.join(root, "src/assets/Rubik.ttf") }); Font.register({ family: "OpenSans", src: path.join(root, "src/assets/OpenSans.ttf") });
const styles = StyleSheet.create({ page: { flexDirection: "column", backgroundColor: "#FFFFFF", padding: 12, paddingHorizontal: 30 }, section: { marginBottom: 3 }, name: { fontSize: 16, fontWeight: "bold", fontFamily: "Rubik" }, role: { fontSize: 12, fontFamily: "Rubik" }, title: { fontSize: 13, fontWeight: "bold", marginBottom: 5, fontFamily: "Rubik", color: "#0060df" }, roleTitle: { fontSize: 11, fontFamily: "Rubik", fontWeight: "bold", marginBottom: 3 }, text: { fontSize: 9, marginBottom: 3, fontFamily: "OpenSans", lineHeight: 1.7 }, subText: { fontSize: 8, lineHeight: 1.5, fontFamily: "OpenSans" }, link: { color: "#2980b9", textDecoration: "none" } });
function MinimalNodeLayout({ resume, forceOverflow }) {
  const children = [
    h(Text, { style: styles.name, key: "name" }, resume.name), h(Text, { style: styles.role, key: "role" }, resume.title), h(Text, { style: styles.text, key: "contact" }, [resume.location, ...resume.social.map((x) => x.title), ...resume.contact.map((x) => x.title)].join(" | ")),
    h(View, { style: styles.section, key: "skills" }, h(Text, { style: styles.title }, "You can count me on:"), h(Text, { style: styles.text }, resume.hardSkills.join(" | "))), h(View, { style: styles.section, key: "summary" }, h(Text, { style: styles.title }, "Summary"), h(Text, { style: styles.text }, resume.about)),
    h(View, { style: styles.section, key: "experience" }, h(Text, { style: styles.title }, "Experiences"), ...resume.experiences.map((e, i) => {
      const entryChildren = [h(Text, { style: styles.roleTitle, key: "title" }, `${e.role} - ${e.company}`), h(Text, { style: styles.subText, key: "meta" }, `${e.time}${e.location ? ` | ${e.location}` : ""} - ${e.type}`)];
      if (e.technologies.length) entryChildren.push(h(Text, { style: styles.text, key: "stack" }, `Stack: ${e.technologies.join(", ")}`));
      if (e.description) entryChildren.push(h(Text, { style: styles.text, key: "description" }, e.description));
      e.responsibilities.forEach((bullet, j) => entryChildren.push(h(Text, { key: `bullet-${j}`, style: styles.text }, `- ${bullet}`)));
      return h(View, { key: `${e.company}-${i}`, style: { marginBottom: 10 }, wrap: false }, ...entryChildren);
    })),
  ];
  if (resume.projects.length) {
    const projectChildren = [h(Text, { style: styles.title, key: "title" }, "OpenSource Projects")];
    resume.projects.forEach((p) => projectChildren.push(h(View, { key: p.title }, h(Link, { style: styles.link, src: p.url }, p.title), h(Text, { style: styles.subText }, p.description), h(Text, { style: styles.subText }, `Stack: ${p.stack.join(" | ")}`))));
    children.push(h(View, { style: styles.section, key: "projects" }, ...projectChildren));
  }
  if (forceOverflow) children.push(h(View, { break: true, key: "overflow" }, h(Text, null, "forced overflow")));
  return h(Document, { title: `${resume.name.replace(" ", "-")}-${resume.title.replace(" ", "-")}`, author: resume.name }, h(Page, { size: "A4", style: styles.page }, h(View, null, ...children)));
}
function pdfVerification(pdfPath) {
  execFileSync("qpdf", ["--check", pdfPath], { stdio: "pipe" });
  const output = execFileSync("pdfinfo", [pdfPath], { encoding: "utf8" });
  const pages = Number((output.match(/^Pages:\s+(\d+)/m) || [])[1]); const size = (output.match(/^Page size:\s+([\d.]+) x ([\d.]+) pts/m) || []);
  const width = Number(size[1]); const height = Number(size[2]); const a4 = Math.abs(width - 595.28) < 1 && Math.abs(height - 841.89) < 1;
  if (pages !== 1 || !a4) throw new Error(`PDF validation failed: expected one A4 page, got ${pages || "unknown"} page(s), ${width}x${height}pt.`);
  return { pages, widthPoints: width, heightPoints: height, a4 };
}
async function main() {
  const jobPath = requireRegularProjectFile(process.argv[2]); const job = fs.readFileSync(jobPath, "utf8"); const master = JSON.parse(fs.readFileSync(path.join(root, "data/master-profile.json"), "utf8")).resume; validateMaster(master);
  const tokens = tokenise(job); const slug = path.basename(jobPath, path.extname(jobPath)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "job"; const digest = crypto.createHash("sha256").update(jobPath).update(job).digest("hex").slice(0, 10); const out = path.join(root, "tailored", `${slug}-${digest}`);
  if (fs.existsSync(out)) throw new Error(`Refusing to overwrite existing tailored output: ${path.relative(root, out)}`); fs.mkdirSync(out, { recursive: true });
  let limits = { skills: 12, experiences: 4, bullets: 3, technologies: 6, projects: 2 }; const removals = []; let resume; let pdf; let verification; let lastError;
  const makeResume = () => { const skills = selected(rank(master.hardSkills, (x) => x, job, tokens), limits.skills, 6).map((x) => x.item); const experiences = selected(rank(master.experiences, (x) => `${x.role} ${x.company} ${x.description} ${x.technologies.join(" ")} ${x.responsibilities.join(" ")}`, job, tokens), limits.experiences, 2).map((x) => ({ ...x.item, responsibilities: selected(rank(x.item.responsibilities, (b) => b, job, tokens), limits.bullets, 1).map((b) => b.item), technologies: selected(rank(x.item.technologies, (t) => t, job, tokens), limits.technologies, 2).map((t) => t.item) })); const projects = selected(rank(master.projects, (x) => `${x.title} ${x.description} ${x.stack.join(" ")}`, job, tokens), limits.projects, 0).map((x) => x.item); return { slug, name: master.name, title: master.title, location: master.location, contact: master.contact, social: master.social, hardSkills: skills, about: master.about, experiences, projects }; };
  const steps = ["projects", "bullets", "skills", "technologies", "experiences"];
  for (let attempt = 0; attempt < 30; attempt++) { resume = makeResume(); assertGrounded(resume, master); pdf = null; const temp = path.join(out, ".candidate.pdf"); try { pdf = await renderToBuffer(h(MinimalNodeLayout, { resume, forceOverflow: process.env.TAILOR_FORCE_OVERFLOW === "1" })); fs.writeFileSync(temp, pdf); if (process.env.TAILOR_FORCE_OVERFLOW === "1") throw new Error("PDF validation failed: forced impossible fit."); verification = pdfVerification(temp); fs.unlinkSync(temp); break; } catch (error) { lastError = error; if (fs.existsSync(temp)) fs.unlinkSync(temp); const key = steps.find((candidate) => limits[candidate] > 0); if (!key) break; limits[key]--; removals.push({ attempt: attempt + 1, removedNext: key }); } }
  if (!verification) { fs.rmSync(out, { recursive: true, force: true }); throw lastError; }
  fs.writeFileSync(path.join(out, "resume.json"), `${JSON.stringify(resume, null, 2)}\n`); fs.writeFileSync(path.join(out, "resume.pdf"), pdf);
  const unsupported = [...tokens].filter((token) => !master.hardSkills.some((skill) => skill.toLowerCase().includes(token)) && !master.experiences.some((x) => `${x.role} ${x.description} ${x.technologies.join(" ")} ${x.responsibilities.join(" ")}`.toLowerCase().includes(token))).slice(0, 20);
  const selectedFacts = [...resume.hardSkills, ...resume.experiences.map((x) => `${x.role} at ${x.company}`)]; const body = selectedFacts.length ? `I bring documented experience with ${selectedFacts.slice(0, 6).join(", ")}.` : "I would welcome the opportunity to discuss my documented experience."; fs.writeFileSync(path.join(out, "cover-letter.md"), `# Cover Letter\n\nDear Hiring Team,\n\nI am interested in the opportunity described in ${path.basename(jobPath)}. ${body}\n\nSincerely,\n${master.name}\n`);
  const report = { jobDescription: path.relative(root, jobPath), output: path.relative(root, out), renderer: "@react-pdf/renderer renderToBuffer; qpdf --check; pdfinfo", pageSize: "A4", pdf: verification, oneA4Page: true, limits, compaction: removals, unsupportedRequirements: unsupported, warnings: unsupported.length ? ["Potential job requirements not supported by canonical profile; they were not claimed."] : [] }; fs.writeFileSync(path.join(out, "validation-report.json"), `${JSON.stringify(report, null, 2)}\n`); console.log(JSON.stringify(report));
}
if (require.main === module) main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
module.exports = { pdfVerification, requireRegularProjectFile, assertGrounded, root };
