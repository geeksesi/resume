import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import avatar from "../assets/images/me.jpg";
import github from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";

export default () => (
    <>
        <Layout className="block font-sans">
            <header>
                <div>
                    <div className="w-1/2 h-14 border-r-2 border-black"></div>
                    <h1 className="text-2xl font-mono text-center pt-2">
                        <strong>Mohammad Javad Ghasemy</strong>
                    </h1>
                </div>
                <div className="flex flex-row pt-3 pb-8">
                    <div className="flex-1 h-4  mr-2">
                        <div className="border-b-2 border-black w-full h-full"></div>
                    </div>
                    <h2 className="flex-1 text-lg font-sans">BackEnd Developer</h2>
                </div>
            </header>
            <main className="flex max-w-screen-xl mx-auto flex-wrap">
                <div className="sidebar">
                    <div className="flex justify-center pb-5">
                        <img src={avatar} className="aspect-square" width="90%" />
                    </div>
                    <div className="px-10">
                        <div className="mx-auto border-l-2 border-black border-opacity-70 my-1">
                            <h3 className="p-4 text-2xl">Contact</h3>
                            <ul className="dot-margin list-disc list-inside">
                                <li className="py-1 px-5">
                                    <a href="tel:+989100101543">+989100101543</a>
                                </li>
                                <li className="py-1 px-5">
                                    <a href="mailto:geeksesi@gmail.com">geeksesi@gmail.com</a>
                                </li>
                                <li className="flex flex-row justify-around py-3 px-5 max-w-xs">
                                    <a href="https://github.com/geeksesi/">
                                        <img src={github} width={25} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/geeksesi/">
                                        <img src={linkedIn} width={25} />
                                    </a>
                                    <a href="https://youtube.com/@geeksesi">
                                        <img src={youtube} width={25} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-10">
                        <div className="mx-auto border-l-2 border-black border-opacity-70 my-7">
                            <h3 className="p-4 text-2xl">Skills</h3>
                            <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                <li className="py-1 px-5">Proficiency in PHP</li>
                                <li className="py-1 px-5">Database design and SQL</li>
                                <li className="py-1 px-5">Problem-solving and analytical </li>
                                <li className="py-1 px-5">Teamwork and collaboration</li>
                                <li className="py-1 px-5">Frontend development skills</li>
                                <li className="py-1 px-5">Teaching and Mentorship</li>
                                <li className="py-1 px-5">Efficient learner</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="px-10">
                        <div className="mx-auto border-l-2 border-black border-opacity-70 my-1">
                            <h3 className="p-4 text-2xl">Profile</h3>
                            <p className="px-4 text-sm pb-4 text-justify">
                                I am an experienced PHP backend developer with a strong background in developing web
                                applications. I have a track record of delivering high-quality projects for clients in
                                various industries. In addition to my technical skills, I also have a passion for
                                mentoring junior developers and enjoy working as part of a team.
                            </p>
                        </div>
                    </div>
                    <div className="px-10">
                        <div className="mx-auto border-l-2 border-black border-opacity-70 my-7">
                            <h3 className="p-4 text-2xl">Experiences</h3>
                            <article className="py-4">
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    <li className="py-1 px-5">
                                        <a href="https://jackwestin.com">
                                            <strong>BackEnd Developer</strong> at <strong>EWMA Team</strong> (2022 -
                                            Present) - Remote
                                        </a>
                                        <p className="text-justify">
                                            Maintained and developed new features for the Jackwesting.com educational
                                            system, a web-based platform for MCAT and CARS courses
                                        </p>
                                        <ul>
                                            <li className="py-1 px-5 text-justify">
                                                Worked on a system similar to <a href="https://ankiweb.net/">Anki</a>{" "}
                                                flashcards, which had a large data set with over 100 million records
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Fixed bugs and maintained the old part of the system, which required
                                                careful attention to detail and problem-solving skills
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Collaborated with a team of developers to ensure seamless integration of
                                                frontend and backend functionality
                                            </li>
                                        </ul>
                                        <h6 className="text-xs">
                                            <b>Technologies I used</b>
                                        </h6>
                                        <div className="flex flex-row justify-around text-xs">
                                            <span>PHP</span>
                                            <span>Laravel</span>
                                            <span>MySQL</span>
                                            <span>Redis</span>
                                            <span>Docker</span>
                                        </div>
                                    </li>
                                </ul>
                            </article>
                            <article className="py-4">
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    <li className="py-1 px-5">
                                        <a href="https://signalads.com/">
                                            <strong>PHP BackEnd Developer</strong> at <strong>Signalads.com</strong>{" "}
                                            (2021 - 2022) - Hybrid
                                        </a>
                                        <p className="text-justify">
                                            Worked as a backend developer for a sms broadcast website and other products
                                            including a dental clinic website and CRM, as well as an IoT system for
                                            fruit transportation
                                        </p>
                                        <ul>
                                            <li className="py-1 px-5 text-justify">
                                                Used PHP and Laravel to develop and maintain the company's web
                                                applications Learned and implemented GraphQL to optimize the large
                                                dataset
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Led a team effort to refactor the old sms broadcast panel and improve
                                                the data structure, synchronization, and processing speed using RabbitMQ
                                                and Laravel
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Contributed to the company's agile development process and facilitated
                                                communication between the development team and non-technical
                                                stakeholders
                                            </li>
                                        </ul>
                                        <h6 className="text-xs">
                                            <b>Technologies I used</b>
                                        </h6>
                                        <div className="flex flex-row justify-around text-xs">
                                            <span>PHP</span>
                                            <span>Laravel</span>
                                            <span>GraphQL</span>
                                            <span>Redis</span>
                                            <span>PostgreSQL</span>
                                        </div>
                                    </li>
                                </ul>
                            </article>
                            <article className="py-4">
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    <li className="py-1 px-5">
                                        <strong>Teaching and Mentorship (From 2020)</strong>
                                        <p className="text-justify">
                                            I have a passion for sharing my knowledge with others and enjoy the
                                            opportunity to communicate and connect with people. My experience as a
                                            mentor began when I helped a colleague learn HTML and CSS, and has since
                                            grown to include a variety of teaching and mentorship roles.
                                        </p>
                                        <ul>
                                            <li className="py-1 px-5 text-justify">
                                                Started a <a href="https://youtube.com/@geeksesi">YouTube channel</a> to
                                                answer questions and provide guidance to students as a teacher assistant
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Created project-based videos on PHP and mentored individuals through
                                                one-on-one coaching
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Led a team of mentees, two of whom now work with PHP and have salaries
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Currently serving as a mentor for a group of students in the{" "}
                                                <a href="https://quera.ir">Quera.ir</a> software development bootcamp,
                                                teaching design patterns and team work through online videos and group
                                                projects{" "}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </article>
                            <article className="py-4">
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    <li className="py-1 px-5">
                                        <strong>Freelance Work (From 2018 - 2021)</strong>
                                        <p className="text-justify">
                                            As a freelancer, I have worked on a variety of projects ranging from web
                                            development to game development and blockchain. I have used technologies
                                            such as React, PHP, Laravel, and Node.js in my work and have an active
                                            GitHub account with several production projects.
                                        </p>
                                        <ul>
                                            <li className="py-1 px-5 text-justify">
                                                Created a PHP and Telegram bot-based game called{" "}
                                                <a href="https://github.com/geeksesi/guess_emoji_telegram_bot">
                                                    Guess Emoji Game
                                                </a>{" "}
                                                in which players must guess the meaning of a group of emojis
                                            </li>
                                            <li className="py-1 px-5 text-justify">
                                                Contributed to the <a href="https://gitlab.com/payzos">Payzos</a>{" "}
                                                project, a blockchain-based payment system for the Tezos network and
                                                e-commerce platforms such as WordPress, Magento, OpenCart, and
                                                PrestaShop. Used PHP, React, and the Tezos API to create plugins for
                                                WordPress, Magento, OpenCart, and PrestaShop using PHP and HTML.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>
);

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;
