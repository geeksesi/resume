import * as React from "react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import Title from "./Components/Title";
import style from "./style";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

export default ({ resume }) => {
    const styles = style;

    return (
        <Document
            title={`${resume.name.replace(" ", "-")}-${resume.title.replace(" ", "-")}`}
            author={resume.name.replace(" ", "-")}
        >
            <Page size="A4" style={styles.page}>
                <View style={styles.view}>
                    <Title name={resume.name} role={resume.title} />
                    <Contact items={[resume.location, ...resume.social, ...resume.contact]} />
                    <Skills items={resume.hardSkills} title="You can count me on:" />
                    <Summary text={resume.about} />

                    <View style={styles.section}>
                        <Text style={styles.title}>Experiences</Text>
                        {resume.experiences.map((experience) => (
                            <Experience experience={experience} />
                        ))}
                    </View>
                <Projects items={resume.projects} />
                </View>

            </Page>
        </Document>
    );
};
