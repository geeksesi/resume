import * as React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import style from "../style";
import { Html } from "react-pdf-html";

export default ({ experience }) => {
    const styles = style;

    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.roleTitle}>
                {experience.role} -{" "}
                {experience.url ? (
                    <Link src={experience.url}>{experience.company}</Link>
                ) : (
                    <Text>{experience.company}</Text>
                )}
                <Text style={styles.subText}>
                    {" "}
                    - {experience.time} - {experience.type}
                </Text>
            </Text>

            {experience.technologies && (
                <Text style={styles.text}>Technologies Used: {experience.technologies.join(", ")}</Text>
            )}
            <Text style={styles.text}>{experience.description}</Text>
            <View style={styles.text}>
                {experience.responsibilities.map((text, index) => (
                    <Html style={styles.text} key={index}>{`- ${text}`}</Html>
                ))}
            </View>
        </View>
    );
};
