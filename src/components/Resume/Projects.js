import * as React from "react";
import GuessEmoji from "../../assets/images/projects/emoji-guess.jpg";
import CastelGame from "../../assets/images/projects/castel.jpg";
import Resume from "../../assets/images/projects/resume.jpg";
const avatars = {
    GuessEmoji: GuessEmoji,
    CastelGame: CastelGame,
    Resume: Resume,
};
const Projects = ({ projects }) => (
    <div className="px-5">
        <div className="mx-auto border-l-2 border-black border-opacity-70 my-7">
            <h3 className="p-4 text-2xl">OpenSource Projects</h3>
            <ul className=" text-sm align-top font-sans">
                {projects.map((item, index) => (
                    <li key={index} className="py-1 px-5">
                        <a href={item.url}>
                            <div className="h-full flex flex-row items-center sm:justify-start text-left">
                                <img
                                    alt="team"
                                    className="rounded-lg w-12 h-12 object-cover object-center sm:mb-0 mb-4"
                                    src={avatars[item.thumbnail]}
                                />
                                <div className="flex-grow pl-2">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
export default Projects;
