import * as React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import style from "../style";

export default ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{title}</Text>
            {items.map((skill) => (
                <Text style={styles.text}>{skill}</Text>
            ))}
        </View>
    );
};
