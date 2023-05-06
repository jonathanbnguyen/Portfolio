import Section from "../cards/section";
import Image from "next/image";
import aboutPic from ".././../public/new.jpg";

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="flex flex-row justify-between flex-wrap">
                <div className="md:w-1/2 text-white mt-4 space-y-4 leading-7">
                    <p>
                        My name is Jonathan Nguyen. I am studying to obtain a Bachelor of Science
                        in Computer Science at Wichita State University. I have gained knowledge
                        with different technology stacks through school, work, and personal projects.
                        I am continuing to grow and learn new things everyday. My passion
                        stems from knowing I am making a difference for end users with my development.
                    </p>
                    <p>
                        I started off in technology from playing video games on my 
                        PlayStation 3. Ever since that day, I always had the curiosity of how these games
                        were developed. I began more intuitive with technology with time and experience
                        and but when I executed my first "Hello World" is when everything took off.
                    </p>
                    <p>
                        I have various hobbies I do during my free time. I love working out, playing and
                        watching basketball, video games, and lastly, movies. 
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