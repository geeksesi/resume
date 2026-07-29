import * as React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import style from "../style";

const Contact = ({ items }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>Contact</Text>
            {items.map((item, index) => (
                <Text key={index} style={styles.socialTitleText}>
                    {item.name} : <Link src={item.link}>{item.title}</Link>
                </Text>
            ))}
        </View>
    );
};

export default Contact;
