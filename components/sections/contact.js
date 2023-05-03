import Section from "../cards/section";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram, } from "react-icons/sl";

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <div className="w-full">
                <div className="max-w-full m-auto px-2 pt-4 w-full">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* left */}
                        <div className="h-fit col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <p className="text-white text-center text-2xl">Connect With Me</p>
                                    <div className="flex justify-between h-16 pb-20 pt-10">
                                        <a
                                            href="https://www.linkedin.com/in/nguyenbjonathan/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="text-xl bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <SlSocialLinkedin />
                                            </div>
                                        </a>

                                        <a
                                            href="https://github.com/jonathanbnguyen"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="text-xl bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <TbBrandGithub />
                                            </div>
                                        </a>

                                        <a
                                            href="https://instagram.com/jonathanbnguyen"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="text-xl bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <SlSocialInstagram />
                                            </div>
                                        </a>

                                        <a href="Jonathan_Nguyen_Resume.pdf">
                                            <div className="text-2xl bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form
                                    action={process.env.EMAILFORM}
                                    method="POST"
                                    encType="multipart/form-data"
                                >
                                    <div className="flex flex-col">
                                        <label className="text-white uppercase text-sm py-2">Name</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            type="text"
                                            name="name"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label className="text-white uppercase text-sm py-2">Email</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            type="email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label className="text-white uppercase text-sm py-2">Subject</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            type="text"
                                            name="subject"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label className="text-white uppercase text-sm py-2">Message</label>
                                        <textarea
                                            className="border-2 rounded-lg p-3 border-gray-400 resize-none"
                                            rows="5"
                                            name="message"
                                        ></textarea>
                                    </div>

                                    <button className="mt-4 w-full rounded-md bg-transparent border border-blue-400 p-2 text-blue-400 hover:bg-blue-400/20 transition duration-200 ease-in">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
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