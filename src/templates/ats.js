import * as React from "react";
import ATSLayout from "../components/ATSLayout/index";
import "../styles/index.css";
import { graphql } from "gatsby";
import { PDFViewer } from "@react-pdf/renderer";

const Ats = (data) => {
    const [isClient, setIsClient] = React.useState(false);
    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const resume = data.data.resumeJson;

    return (
        <div>
            {isClient && (
                <PDFViewer className="w-full h-screen">
                    <ATSLayout resume={resume} />
                </PDFViewer>
            )}
        </div>
    );
};

export default Ats;

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;

export const query = graphql`
    query ($slug: String!) {
        resumeJson(slug: { eq: $slug }) {
            id
            slug
            name
            title
            contact {
                link
                name
                title
            }
            social {
                title
                name
                link
            }
            skills
            projects {
                title
                url
                thumbnail
                stack
                description
            }
            about
            experiences {
                title
                role
                company
                time
                type
                url
                description
                responsibilities
                technologies
            }
            languages
            educations
            availability
        }
    }
`;
