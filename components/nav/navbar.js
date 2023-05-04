import Image from "next/image";
import { motion } from "framer-motion";

export function NavBar() {

    const routes = [
        "About",
        "Skills",
        "Work",
        "Projects",
        "Contact",
    ]

    return (
        <div className="flex flex-row w-full justify-between rounded-br-lg shadow-lg bg-opacity-20 backdrop-blur-md rounded-bl-lg bg-blue-400">
            <motion.a href="#home" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                <Image src="/jlogo.png" alt="" width={75} height={25} className="my-auto h-16 ml-16" />
            </motion.a>
            <div className="hidden md:inline-flex flex-row items-center h-16 pr-8">
                {routes.map(route => (
                    <div className="mx-8 my-auto" key={route}>
                        <motion.a href={`#${route.toLowerCase()}`} className=" text-slate-300 hover:text-slate-500"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            >
                            {route}
                        </motion.a>
                    </div>
                ))}
                
                {/* <div className="mx-8 my-auto">
                    <a
                        href="Jonathan_Nguyen_Resume.pdf"
                        target="_blank"
                        >
                        <button className="rounded-md bg-transparent border border-blue-400 p-2 text-blue-400 hover:bg-blue-400/20 transition duration-200 ease-in">
                            Resume
                        </button>
                    </a>
                </div>   */}
            </div>
        </div>
    );
}