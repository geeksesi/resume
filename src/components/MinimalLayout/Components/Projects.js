import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.title}>OpenSource Projects</Text>
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}>
                {items.map((item) => (
                    <View key={item.title} style={{ 
                        width: "32%",
                        marginBottom: 10,
                        padding: 0,
                        // minHeight: 150
                    }}>
                        <Link style={styles.text} src={item.url}>
                            {item.title}
                        </Link>
                        <Text style={styles.subText}>{item.description}</Text>
                        <Text style={styles.subText}>{`Stack: ${item.stack.join(" | ")}`}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};
