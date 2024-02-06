import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items,otherProjects }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>Projects:</Text>
            {items.map((item) => (
                <>
                    <Link style={styles.text} src={item.url}>
                        {item.title} ({item.startAt}|{item.endAt})
                    </Link>
                    <Text style={styles.subText}>{`Skills: ${item.stack.join(", ")}`}</Text>
                    <Text style={styles.subText}>{item.description}</Text>
                </>
            ))}

            <Text style={styles.subText}>{otherProjects}</Text>
        </View>
    );
};
