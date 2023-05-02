import Section from "../cards/section";
import SkillCard from "../cards/skillscard"
import Card from "../cards/card";
import { Group } from "../data/projectdata";

export default function Projects() {
    const Projects = Group;

    return (
        <Section id="projects" title="Projects">
            <div className="mt-8 grid lg:grid-cols-2 sm:gird-cols-1 xl:grid-cols-2 gap-4">
                {Projects.map(proj => (
                    <Card key={proj.name} title={proj.name}>
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