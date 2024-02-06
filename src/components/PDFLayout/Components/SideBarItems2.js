import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{title}</Text>
            {items.map((item) => (
                <>
                    <Link style={styles.text} src={item.url}>
                        {item.title}
                    </Link>
                </>
            ))}
        </View>
    );
};
