import * as React from "react";
import { Link, navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/software-engineer");
    }
    return <Link to="/software-engineer/"></Link>;
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
