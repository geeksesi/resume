import * as React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import style from "../style";

export default ({ name, role }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
        </View>
    );
};
