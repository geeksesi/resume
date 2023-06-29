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
        padding: 30,
    },
    section: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        width: "70%",
        marginRight: "5%",
    },
    rightColumn: {
        flexDirection: "column",
        width: "25%",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 0,
        fontFamily: "Belanosima",
    },
    role: {
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "Rubik",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
        fontFamily: "Rubik",
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
    socialTitleText: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "justify",
        textTransform: "capitalize",
        lineHeight: "1.7",
    },
    subText: {
        fontSize: 8,
        lineHeight: "1.5",
    },
});
