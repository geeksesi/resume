import * as React from "react";
import { Text, View } from "@react-pdf/renderer";
import style from "../style";

const SideBarItems = ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{title}</Text>
            {items.map((item, index) => (
                <Text key={index} style={styles.text}>{item}</Text>
            ))}
        </View>
    );
};

export default SideBarItems;
