import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, } from "react-icons/sl";

const NavDrawer = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const routes = [
        "About",
        "Skills",
        "Work",
        "Projects",
        "Contact",
    ]

    const handleNav = () => {
        setNav(!nav);
        setVisible(!visible);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className="flex flex-row w-full justify-between rounded-br-lg shadow-lg bg-opacity-20 backdrop-blur-md rounded-bl-lg bg-blue-400">
            <motion.a href="#home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Image src="/jlogo.png" alt="" width={75} height={25} className="my-auto h-16 ml-16" />
            </motion.a>

            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'flex items-center pr-5'
                }
            >
                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className='text-white hover:text-blue-500 cursor-pointer'
                >
                    <AiOutlineMenu size={25} className={ nav && "invisible"}/>
                </div>

                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                        ? 'fixed right-0 top-0 w-[45%] h-screen bg-slate-200 p-10 ease-in duration-500'
                        : 'fixed right-[-100%] h-screen top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image
                                src="/jlogo.png"
                                width='87'
                                height='35'
                                alt='/'
                            />
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    
                    <div className='py-4 flex flex-col'>
                        <div className="flex flex-col items-center">
                            {routes.map(route => (
                                <div className="mx-8 my-6" key={route}>
                                    <a href={`#${route.toLowerCase()}`} className=" text-black hover:text-blue-500"
                                        onClick={() => setNav(!nav)}
                                    >
                                        {route}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className='pt-32'>
                            <p className='tracking-widest text-black text-center mb-6'>
                                Connect With Me
                            </p>
                            <div className='flex justify-between w-full'>
                                <a
                                    href='https://www.linkedin.com/in/nguyenbjonathan/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <SlSocialLinkedin />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/jonathanbnguyen'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <TbBrandGithub />
                                    </div>
                                </a>
                                <a href="Jonathan_Nguyen_Resume.pdf">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavDrawer;