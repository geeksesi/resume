import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import avatar from "../assets/images/me.jpg";
import github from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import { Link, navigate } from "gatsby";

export default () => {
    navigate("/backend-developer");
    return <></>;
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
