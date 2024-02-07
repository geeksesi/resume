import * as React from "react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import Title from "./Components/Title";
import style from "./style";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import WorkExperience from "./Components/WorkExperience";
import Contact from "./Components/Contact";
import SideBarItems from "./Components/SideBarItems";
import SideBarItems2 from "./Components/SideBarItems2";
import Projects from "./Components/Projects";
import Projects2 from "./Components/Projects2";
import WorkExperience2 from "./Components/WorkExperience2";

export default ({ resume }) => {
    const styles = style;

    return (
        <Document
            title={`${resume.name.replace(" ", "-")}-${resume.title.replace(" ", "-")}`}
            author={resume.name.replace(" ", "-")}
        >
            <Page size="A4" style={styles.page}>
                <View style={styles.leftColumn}>
                    <Title name={resume.name} role={resume.title} />
                    <Summary text={resume.about} />

                    {/*<View style={styles.section}>
                        <Text style={styles.title}>Experiences</Text>
                        {resume.experiences.map((experience) => (
                            <Experience experience={experience} />
                        ))}
                    </View>*/}

                    <View style={styles.section}>
                        <Text style={styles.title}>Experiences</Text>
                        {resume.workExperience.map((experience) => (
                            <WorkExperience2 WorkExperience={experience} />
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Projects2 items={resume.projects} otherProjects={resume.simpleOtherProjects}/>
                    </View>
                </View>

                <View style={styles.rightColumn}>
                    <SideBarItems items={resume.skills} title="Skills" />

                    <Contact items={[...resume.contact, ...resume.social]} />
                    <SideBarItems items={resume.languages} title="Languages" />
                    {/*<Projects items={resume.projects} />*/}
                    <SideBarItems2 items={resume.complexEducations} title="Educations" />
                </View>
            </Page>
        </Document>
    );
};
