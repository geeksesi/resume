import * as React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import style from "../style";

export default ({ items }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text>
                {items.map((item, i) => {

                    if (typeof item === "string") {
                        return <>
                            <Text key={i} style={styles.socialTitleText}>{item}</Text>
                            {i < items.length - 1 && <Text style={styles.socialTitleText}>{" | "}</Text>}
                        </>;
                    }
                    if (item.name === "email") {
                        return <Link style={[styles.socialTitleText, styles.link]} src={`mailto:${item.link}`}>{item.title}</Link>;
                    }
                    return <>
                        <Link style={[styles.socialTitleText, styles.link]} src={item.link}>{item.name}</Link>
                        {i < items.length - 1 && <Text style={styles.socialTitleText}>{" | "}</Text>}

                    </>
                })}
            </Text>
        </View>
    );
};
