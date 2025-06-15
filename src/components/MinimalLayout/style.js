import { StyleSheet, Font } from "@react-pdf/renderer";
import Belanosima from "../../assets/Belanosima.ttf";
import Rubik from "../../assets/Rubik.ttf";
import OpenSans from "../../assets/OpenSans.ttf";

Font.register({
    family: "Belanosima",
    format: "truetype",
    src: Belanosima,
});
Font.register({
    family: "Rubik",
    format: "truetype",
    src: Rubik,
});
Font.register({
    family: "OpenSans",
    format: "truetype",
    src: OpenSans,
});

export default StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        padding: 15,
        paddingHorizontal: 30,
    },
    section: {
        marginBottom: 3,
    },
    view: {
        flexDirection: "column",
        width: "100%",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 0,
        fontFamily: "Rubik",
    },
    role: {
        fontSize: 12,
        fontWeight: "medium",
        marginBottom: 0,
        fontFamily: "Rubik",
    },
    title: {
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 5,
        fontFamily: "Rubik",
        color: "#0060df",
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 3,
        fontFamily: "Rubik",
    },
    roleTitle: {
        fontSize: 11,
        fontWeight: "extrabold",
        marginBottom: 3,
        fontFamily: "Rubik",
    },
    text: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "justify",
        fontFamily: "OpenSans",
        lineHeight: "1.7",
    },
    description: {
        fontSize: 10,
        marginBottom: 3,
        textAlign: "justify",
        fontFamily: "OpenSans",
        lineHeight: "1.8",
    },
    socialTitleText: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "justify",
        textTransform: "capitalize",
        lineHeight: "1.7",
    },
    link: {
        color: "#2980b9",
        textDecoration: "none",

    },
    subText: {
        fontSize: 8,
        lineHeight: "1.5",
    },
});
