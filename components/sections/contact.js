import Section from "../cards/section";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <div className="w-full">
                <div className="m-auto px-2 pt-4 w-full">
                    <div className="">
                        {/* left */}
                        <div className="h-fit p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <p className="text-white text-center text-2xl">Connect With Me</p>
                                    <div className="flex justify-around h-16 pb-20 pt-10">
                                        <a
                                            href="https://www.linkedin.com/in/nguyenbjonathan/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="text-xl bg-white rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <SlSocialLinkedin />
                                            </div>
                                        </a>

                                        <a
                                            href="https://github.com/jonathanbnguyen"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="text-xl bg-white rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <TbBrandGithub />
                                            </div>
                                        </a>

                                        <a href="Jonathan_Nguyen_Resume.pdf">
                                            <div className="text-2xl bg-white rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            
                        </div> */}
                    </div>
                    
                    <div className="flex justify-center py-10">
                        <a href="#home">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <HiOutlineChevronDoubleUp
                                    className="text-white"
                                    size={30}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Section >
    );
}