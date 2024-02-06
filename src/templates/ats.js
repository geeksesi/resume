import * as React from "react";
import PDFLayout from "../components/PDFLayout/index";
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

export const Head = () => <title>Resume Mojtaba Akbarpour Khomami</title>;

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
                value
            }
            social {
                title
                name
                link
                value
            }
            skills
            projects {
                title
                url
                thumbnail
                stack
                description
                startAt
                endAt
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
            workExperience{
                workAs
                nameOfCompany
                companyLocation
                durationOfEmployment
                url
                description
                responsibilities
                technologies
                workType
                complexResponsibilities{
                    title
                    description
                }
            }
            otherProjects
            simpleEducations
            
            simpleOtherProjects
            languages
            educations
            complexEducations{
                title
                url
            }
        }
    }
`;
