import Section from "../section"
import SkillCard from "../skillscard"
import { Group } from "../data/skillsdata"

export default function Skills() {
    const Titles = Group;

    return (
        <Section id="skills" title="Technical Summary">
            <div className="flex flex-row justify-between flex-wrap">
                {/* <div className="md:w-1/2 text-white mt-4 space-y-4">
                    <p>
                        Throughout my career, I have been able to learn multiple technology stacks
                        and softwares from internships, work, school/school projects, and personal projects.
                        With time and experience, I can learn anything thrown at me.
                    </p>
                </div> */}

                <div className="lg:m-auto">
                    {Titles.map(group =>
                        (
                            <div key={`${group.name}`}>
                                <p className="font-semibold text-white mt-4">{group.name}</p>
                                <div className="flex flex-row flex-wrap">
                                    {group.values.map((skill) => (
                                        <SkillCard key={skill} title={skill} />
                                    ))}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </Section>
    )
}