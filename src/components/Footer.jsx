import  logo from "../assets/logo.svg"
import { FaPhone } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsMailbox2Flag } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="flex flex-col lg:flex-row justify-between items-center bg-creamy h-[75vh] lg:h-[50vh]">
            <div className="w-full lg:w-1/2 bg-browny h-1/2 lg:h-full flex justify-center items-center">
                <img src={logo} className="w-full" alt="Brand Logo" />
            </div>
            <div className="flex flex-col w-full h-full lg:w-1/2 justify-between items-center px-10 py-6">
                <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <div className=" flex gap-2 text-black items-center justify-center"><FaPhone  /><p>(415) 867-4293</p></div>
                    <div className=" flex gap-2 text-black items-center justify-center"><BsMailbox2Flag  /><p>test@example.com</p></div>
                    <div className=" flex gap-2 text-black items-center justify-center"><SiHomeassistantcommunitystore  /><p>1234 Sunset Blvd Los Angeles, CA 90026 United States</p></div>
                    <motion.a href="#meals"
                    whileTap={{scale:0.95}}
                    className="border-2 border-browny my-3 lg:my-6  cursor-pointer px-2 py-4 hover:bg-browny hover:text-creamy hover:border-transparent transition duration-300 font-light text-black flex items-center justify-center gap-2">
                        <p>Go to menu</p>
                        <GoArrowRight size={20}/>
                    </motion.a>
                </div>
                
                <p className="text-browny text-center">&#169; powered by Mohamed Loay 2025</p>
            </div>
        </footer>
    )
}