import * as React from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
    if (typeof window !== `undefined`) {
        navigate("/fullstack-developer");
    }
    return null;
};

export default IndexPage;

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
