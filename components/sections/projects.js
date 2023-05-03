import Section from "../cards/section";
import SkillCard from "../cards/skillscard"
import Card from "../cards/card";
import { Group } from "../data/projectdata";
import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
    const Projects = Group;

    function GitHub({ link }) {
        return (
            <a href={link} target="_blank" aria-label='Opens the page for the GitHub project' rel="noreferrer">
                <div className="w-8 h-8 text-xl bg-white rounded-full inline-flex items-center 
                        justify-center hover:text-blue-500 cursor-pointer
                        transition-all duration-300">
                    <TbBrandGithub />
                </div>
            </a>
        );
    }

    return (
        <Section id="projects" title="Projects">
            <div className="mt-8 grid lg:grid-cols-2 sm:gird-cols-1 xl:grid-cols-2 gap-4">
                {Projects.map(proj => (
                    <Card 
                        key={proj.name} 
                        title={proj.name} 
                        repoIcon={proj.repo ? <GitHub link={proj.repo} /> : undefined}>
                        <div className="flex flex-col justify-between content-between">
                            <div className="">
                                <p className="text-white my-4">{proj.description}</p>
                            </div>

                            <div className='block'>
                                {proj.tech.map((skill) => (
                                    <SkillCard key={skill} title={skill} />
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}