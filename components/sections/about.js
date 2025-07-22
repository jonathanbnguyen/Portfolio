import Section from "../cards/section";
import Image from "next/image";
import aboutPic from ".././../public/new.jpg";

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="flex flex-row justify-between flex-wrap">
                <div className="md:w-1/2 text-white mt-4 space-y-4 leading-7">
                    <p>
                        My name is Jonathan Nguyen. I have a Bachelor of Science in Computer Science from 
                        Wichita State University. I have gained knowledge of different technology stacks through school, work,
                        and personal projects. I am a hard working and consistent individual who sets firm goals with a
                        positive mindset. I have strong communication skills and am confident in my ability to produce and
                        dependably learn through experience. My passion stems from knowing I am making a difference for end users
                        with my development.
                    </p>
                    <p>
                        I started off in technology by playing video games on my PlayStation 3. Ever since that day,
                        I have always had a curiosity about how these games were developed. I became more intuitive with
                        technology with time and experience, but when I executed my first "Hello World", everything took off.
                    </p>
                    <p>
                        I have various hobbies that I do during my free time. I love working out,
                        basketball, video games, and movies.
                    </p>
                </div>

                <div className="items-center md:order-none order-first m-auto">
                    <Image
                        src={aboutPic}
                        alt=''
                        className="mt-4 md:w-96"
                    />
                </div>
            </div>

        </Section>
    );
}