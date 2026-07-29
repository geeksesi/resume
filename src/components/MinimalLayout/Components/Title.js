import * as React from "react";
import { Text, View } from "@react-pdf/renderer";
import style from "../style";

const Title = ({ name, role }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.name}>{name} <Text style={styles.role}>{"- "}</Text> <Text style={styles.role}>{role}</Text></Text>
        </View>
    );
};

export default Title;
