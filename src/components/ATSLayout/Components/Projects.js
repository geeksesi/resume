import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>OpenSource Projects</Text>
            {items.map((item) => (
                <>
                    <Link style={styles.text} src={item.url}>
                        {item.title}
                    </Link>
                    <Text style={styles.subText}>{`Skills: ${item.stack.join(", ")}`}</Text>
                    <Text style={styles.subText}>{item.description}</Text>
                </>
            ))}
        </View>
    );
};
