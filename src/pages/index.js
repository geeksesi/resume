import * as React from "react";
import { Link, navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/fullstack-developer");
    }
    return <Link to="/fullstack-developer/"></Link>;
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
