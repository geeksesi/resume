import * as React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import style from "../style";

export default ({ text }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
