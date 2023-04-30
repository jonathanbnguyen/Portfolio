import Section from "../cards/section"
import Image from "next/image"
import aboutPic from ".././../public/new.jpg"

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="flex flex-row justify-between flex-wrap">
                <div className="md:w-1/2 text-white mt-4 space-y-4 leading-7">
                    <p>
                        My name is Jonathan Nguyen. I started off in technology from playing video games on my 
                        PlayStation 2. Ever since that day, I always had the curiosity of how these games
                        were developed. I began more intuitive with technology with time and experience
                        and become basically the "Tech Guy" of my family. With any conflict, I will always
                        find a solution. Whether it takes me time to research or for me to ask for help,
                        I will find the answer.
                    </p>
                    <p>
                        I have various hobbies I do during my free time. I love working out, it's a great
                        stress reliever for me and I love being able to improve everyday. I love basketball. 
                        I started playing when I was 10 years old and loved it every since. I am a huge
                        Los Angeles Lakers fan and grew up watching Kobe Bryant. I also play video games.
                        I usually play shooters and/or battle royale games. Lastly, I am HUGE into movies.
                        A couple of my favorite are Marvel movies, Star Wars, and Harry Potter.
                    </p>
                </div>

                <div className="items-center md:order-none order-first m-auto">
                    <Image
                        src={aboutPic}
                        className="mt-4 md:w-96"
                    />
                </div>
            </div>

        </Section>
    )
}