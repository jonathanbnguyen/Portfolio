import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram, } from "react-icons/sl"; 

const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-black">
            <div className="flex flex-col gap-4"> 
                <a href="https://github.com/jonathanbnguyen/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-white rounded-full inline-flex items-center 
                        justify-center hover:text-blue-500 cursor-pointer hover:-translate-y-2 
                        transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="https://linkedin.com/in/nguyenbjonathan/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-white rounded-full inline-flex items-center 
                        justify-center hover:text-blue-500 cursor-pointer hover:-translate-y-2 
                        transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
                </a>
                <a href="https://instagram.com/jonathanbnguyen/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-white rounded-full inline-flex items-center 
                        justify-center hover:text-blue-500 cursor-pointer hover:-translate-y-2 
                        transition-all duration-300">
                        <SlSocialInstagram />
                    </span>
                </a>                          
            </div>
            <div className="w-[2px] h-32 bg-white"></div>
        </div>
    );
};

export default RightSide;