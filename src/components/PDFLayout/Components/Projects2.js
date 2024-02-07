import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items }) => {
    const styles = style;

    return (
        <View>
            <Text style={styles.subTitle}>Projects:</Text>
            {items.map((item) => (
                <>
                    <Text style={styles.text}><Link  src={item.url}>{item.title} </Link>(From {item.startAt})</Text>
                    <Text style={styles.subText}>{`Skills: ${item.stack.join(", ")}`}</Text>
                    <Text style={styles.subText}>{item.description}</Text>
                </>
            ))}
        </View>
    );
};
