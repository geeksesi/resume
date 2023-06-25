import * as React from "react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import Title from "./Components/Title";
import style from "./style";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import SideBarItems from "./Components/SideBarItems";

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

                    <View style={styles.section}>
                        <Text style={styles.title}>Experiences</Text>
                        {resume.experiences.map((experience) => (
                            <Experience experience={experience} />
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.subTitle}>Open Source Projects</Text>
                        <Text style={styles.text}>- Project 1: Description of the project.</Text>
                        <Text style={styles.text}>- Project 2: Description of the project.</Text>
                    </View>
                </View>

                <View style={styles.rightColumn}>
                    <SideBarItems items={resume.skills} title="Skills" />

                    <Contact items={[...resume.contact, ...resume.social]} />
                    <SideBarItems items={resume.languages} title="Languages" />
                    <SideBarItems items={resume.educations} title="Education" />
                </View>
            </Page>
        </Document>
    );
};
