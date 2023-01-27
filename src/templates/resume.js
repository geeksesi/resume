import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import avatar from "../assets/images/me.jpg";
import github from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import { graphql } from "gatsby";

export default (data) => {
    const socials = {
        github: github,
        linkedin: linkedIn,
        youtube: youtube,
    };
    const resume = data.data.resumeJson;
    console.log(resume);
    return (
        <>
            <Layout className="block font-sans">
                <header>
                    <div>
                        <div className="w-1/2 h-14 border-r-2 border-black"></div>
                        <h1 className="text-2xl font-mono text-center pt-2">
                            <strong>{resume.name}</strong>
                        </h1>
                    </div>
                    <div className="flex flex-row pt-3 pb-8">
                        <div className="flex-1 h-4  mr-2">
                            <div className="border-b-2 border-black w-full h-full"></div>
                        </div>
                        <h2 className="flex-1 text-lg font-sans">{resume.title}</h2>
                    </div>
                </header>
                <main className="flex max-w-screen-xl mx-auto flex-wrap">
                    <div className="sidebar">
                        <div className="flex justify-center p-5">
                            <img src={avatar} className="aspect-square" />
                        </div>
                        <div className="px-10">
                            <div className="mx-auto border-l-2 border-black border-opacity-70 my-1">
                                <h3 className="p-4 text-2xl">Contact</h3>
                                <ul className="dot-margin list-disc list-inside">
                                    {resume.contact.map((item, index) => (
                                        <li className="py-1 px-5" key={index}>
                                            <a href={item.link}>{item.value}</a>
                                        </li>
                                    ))}

                                    <li className="flex flex-row justify-around py-3 px-5 max-w-xs">
                                        {resume.social.map((item, index) => (
                                            <a href={item.link} key={index}>
                                                <img src={socials[item.name]} width={25} />
                                            </a>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-10">
                            <div className="mx-auto border-l-2 border-black border-opacity-70 my-7">
                                <h3 className="p-4 text-2xl">Skills</h3>
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    {resume.skills.map((item, index) => (
                                        <li key={index} className="py-1 px-5">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="main">
                        <div className="px-10">
                            <div className="mx-auto border-l-2 border-black border-opacity-70 my-1">
                                <h3 className="p-4 text-2xl">Profile</h3>
                                <p className="px-4 text-sm pb-4 text-justify">{resume.about}</p>
                            </div>
                        </div>
                        <div className="px-10">
                            <div className="mx-auto border-l-2 border-black border-opacity-70 my-7">
                                <h3 className="p-4 text-2xl">Experiences</h3>
                                {resume.experiences.map((item, index) => (
                                    <article className="py-4" key={index}>
                                        <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                            <li className="py-1 px-5">
                                                <a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }}></a>
                                                <p className="text-justify">{item.description}</p>
                                                <ul>
                                                    {item.responsibilities.map((item, index) => (
                                                        <li
                                                            className="py-1 px-5 text-justify"
                                                            key={index}
                                                            dangerouslySetInnerHTML={{ __html: item }}
                                                        ></li>
                                                    ))}
                                                </ul>
                                                {item.technologies && (
                                                    <>
                                                        <h6 className="text-xs">
                                                            <b>Technologies I used</b>
                                                        </h6>
                                                        <div className="flex flex-row justify-around text-xs">
                                                            {item.technologies.map((item, index) => (
                                                                <span
                                                                    key={index}
                                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                                ></span>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
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
            contact {
                value
                link
            }
            social {
                name
                link
            }
            skills
            about
            experiences {
                title
                url
                description
                responsibilities
                technologies
            }
        }
    }
`;
