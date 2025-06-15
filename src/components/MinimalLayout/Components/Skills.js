import * as React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import style from "../style";

export default ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>

                {items.map((item, i) => (
                    <>
                        <Text style={styles.text} key={item}>{item} </Text>
                        {i < items.length - 1 && <Text style={styles.text}>{" | "}</Text>}
                    </>
                ))}
            </Text>
        </View>
    );
};
