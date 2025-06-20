import * as React from "react";
import PDFLayout from "../components/MinimalLayout/index";
import "../styles/index.css";
import { graphql } from "gatsby";
import { PDFViewer } from "@react-pdf/renderer";

export default (data) => {
    const [isClient, setIsClient] = React.useState(false);
    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const resume = data.data.resumeJson;

    return (
        <div>
            {isClient && (
                <PDFViewer className="w-full h-screen">
                    <PDFLayout resume={resume} />
                </PDFViewer>
            )}
        </div>
    );
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;

export const query = graphql`
    query ($slug: String!) {
        resumeJson(slug: { eq: $slug }) {
            id
            slug
            name
            title
            location
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
            hardSkills
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
