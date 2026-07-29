import * as React from "react";
import "./style.css";
const Layout = (props) => <div className={props.className + "container"}>{props.children}</div>;

export default Layout;
