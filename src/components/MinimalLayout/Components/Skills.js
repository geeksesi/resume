import * as React from "react";
import { Text, View } from "@react-pdf/renderer";
import style from "../style";

const Skills = ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>

                {items.map((item, i) => (
                    <React.Fragment key={item}>
                        <Text style={styles.text}>{item} </Text>
                        {i < items.length - 1 && <Text style={styles.text}>{" | "}</Text>}
                    </React.Fragment>
                ))}
            </Text>
        </View>
    );
};

export default Skills;
