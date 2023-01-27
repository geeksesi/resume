import * as React from "react";
import { navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/backend-developer");
    }
    return <></>;
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
