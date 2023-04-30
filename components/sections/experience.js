import Section from "../cards/section";
import SkillCard from "../cards/skillscard"
import Card from "../cards/card";
import { Group } from "../data/expdata";

export default function Experience() {
    const workExperience = Group;
    
    return (
        <Section id="work" title="Experience">
            <div className="mt-8 grid lg:grid-cols-2 gap-5">
                {workExperience.map(experience => (
                    <Card key={experience.name} title={experience.name}>
                        <p className="text-white text-sm">
                            {experience.title}
                        </p>

                        <p className="text-white text-sm">
                            {experience.date}
                        </p>

                        <ul className="list-disc text-white ml-4 mt-4 space-y-2 text-base mb-2">
                            {experience.description.map((description, index) => (
                                <li className="text-white text-base mt-4" key={index}>
                                    {description}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                            {experience.tech.map(skill => (
                                <SkillCard key={skill} title={skill} />
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}