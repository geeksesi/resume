import * as React from "react";
import "./style.css";
export default (props) => <div className={props.className + "container"}>{props.children}</div>;
