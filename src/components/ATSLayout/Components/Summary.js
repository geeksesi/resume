import * as React from "react";
import { Text, View } from "@react-pdf/renderer";
import style from "../style";

const Summary = ({ text }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default Summary;
