import * as React from "react";
import { Link, navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/backend-developer");
    }
    return <Link to="/backend-developer/"></Link>;
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
