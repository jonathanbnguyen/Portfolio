import Section from "../cards/section";
import SkillCard from "../cards/skillscard"
import { Group } from "../data/expdata";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    const workExperience = Group;

    const ExperienceCard = ({ experience }) => {
        return (
            <VerticalTimelineElement
                contentStyle={{
                    background: "#304159",
                    color: "white",
                }}
                contentArrowStyle={{ borderRight: "10px white" }}
                date={experience.date}
                iconStyle={{ background: "white", color: "black"}}
                // icon={
                //     <div className='flex justify-center items-center w-full h-full'>
                //         <img
                //             src={experience.icon}
                //             alt={experience.name}
                //             className='w-[60%] h-[60%] object-contain'
                //         />
                //     </div>
                // }
            >
                <div>
                    <h1 className="text-white text-2xl font-bold">{experience.title}</h1>
                    <p
                        className="text-base font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.name}
                    </p>
                </div>

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
            </VerticalTimelineElement>
        );
    };
    
    return (
        <Section id="work" title="Experience">
            {/* <div className="mt-8 grid lg:grid-cols-2 gap-5">
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
            </div> */}

            <div className='mt-10 flex flex-col'>
                <VerticalTimeline>
                    {workExperience.map((experience, index) => (
                        <ExperienceCard
                            key={experience.name}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </Section>
    );
}