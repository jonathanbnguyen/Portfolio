import Section from "./section"

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="flex flex-row justify-between flex-wrap">
                <div className="md:w-1/2 text-white mt-4 space-y-4">
                    <p>
                        My name is Jonathan Nguyen. I started off in technology from playing video games on my 
                        PlayStation 2. Ever since that day, I always had the curiosity of how these games
                        were developed. I began more and more intuitive with technology with time and experience
                        and become basically the "Tech Guy" of my family. Being able to fix anything that 
                        anyone struggled with. TBC....
                    </p>
                </div>
            </div>

        </Section>
    )
}