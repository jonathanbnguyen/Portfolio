
import { motion } from "framer-motion";

export function Banner() {
    return (
        <section id="home" 
            className="max-w-max mx-auto py-20 md:py-20 flex flex-col gap-4
                lg:gap-8 md:px-20 xl:px-4 text-white"
            >
            <h1 className="text-lg tracking-wide">
                Hi, my name is
            </h1>
            <p className=" md:text-7xl text-4xl font-bold">
                Jonathan Nguyen 
            </p>

            <p className="md:max-w-5xl">
                I am a developer with 2+ years of experience in full-stack development.
                I am a hard working and consistent individual who sets firm goals with a positive mindset. 
                I have strong communication skills, and am confident in my ability to produce and 
                dependably learn through experience.
            </p>

            <div>
                <a
                    href="Jonathan_Nguyen_Resume.pdf"
                    target="_blank"
                    >
                    <button className="rounded-md bg-transparent border border-blue-400 p-4 text-blue-400 hover:bg-blue-400/20 transition duration-200 ease-in">
                        Resume
                    </button>
                </a>
            </div>  

        </section>
    )
}

export default Banner;