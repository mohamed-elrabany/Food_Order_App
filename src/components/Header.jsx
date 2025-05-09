import NavBar from "./NavBar"
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import headerImg from "../assets/header.jpg";

export default function Header(){
    return(
        <header 
        style={{backgroundImage: `url(${headerImg})`, objectFit:"cover", backgroundRepeat:"no-repeat", backgroundPosition: "center"}}
        className="h-screen justify-center items-center">
            <NavBar />
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, ease:"easeInOut"}}
            className="flex flex-col gap-6 px-8 h-full items-center justify-center">
                <p className="font-light text-creamy font-Caramel lg:text-4xl
                text-3xl">
                    Best Food In Town
                </p>

                <h1 className="text-center font-Raleway w-full md:w-2/3 lg:w-1/2 text-primary
                lg:text-4xl text-lg">
                    Taste The rich high quality flavor of high quality food
                </h1>

                <p className="text-creamy text-center w-full md:w-2/3 lg:w-1/2 text-base lg:text-lg">
                    We only use the five start quality for our menu, 
                    come and get the richness in every food we serve.
                </p>
                <motion.a href="#meals"
                whileTap={{scale:0.95}}
                className="bg-creamy hover:bg-creamy/80 cursor-pointer px-1 py-3 lg:px-2 lg:py-4 transition duration-300 font-light text-browny flex items-center justify-center gap-2">
                    <p>Go to menu</p>
                    <GoArrowRight size={20}/>
                </motion.a>
            </motion.div>

        </header>
    )
}