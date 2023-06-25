import { StyleSheet, Font } from "@react-pdf/renderer";
import IRANSansWeb from "../../assets/IRANSansWeb.ttf";

Font.register({
    family: "IRANSansWeb",
    format: "truetype",
    src: IRANSansWeb,
});

export default StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        padding: 30,
        fontFamily: "IRANSansWeb",
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
    },
    role: {
        fontSize: 13,
        fontWeight: "bold",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 3,
    },
    roleTitle: {
        fontSize: 11,
        fontWeight: "extrabold",
        marginBottom: 3,
    },
    text: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "justify",
    },
    socialTitleText: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "justify",
        textTransform: "capitalize",
    },
    subText: {
        fontSize: 8,
    },
});
