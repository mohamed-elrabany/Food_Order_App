import { useContext } from "react";
import logo from "../assets/logo.svg";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import { FaBasketShopping } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function NavBar(){

    const cartCtx= useContext(CartContext);
    const totalCartItems= cartCtx.items.reduce((total, item)=> {
            return total + item.quantity;
        },0)

    const userProgressCtx= useContext(UserProgressContext);
    function handleShowCart(){
        userProgressCtx.showCart();
    }

    

    return(
        <nav className="flex justify-between items-center p-8 absolute top-0 left-0 right-0">
                <motion.img 
                initial={{opacity:0, x:-40}}
                animate={{opacity:1, x:0}}
                transition={{duration:1, ease:"easeInOut"}}
                className="object-cover w-24 lg:w-auto"
                src={logo} alt="Brand Logo" />


            <motion.nav 
            initial={{opacity:0, x:30}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, ease:"easeInOut"}}
            onClick={handleShowCart}
             className="flex justify-center items-center gap-2 lg:gap-4 border-2 border-creamy transition duration-300 px-1 py-3 lg:px-2 lg:py-4 cursor-pointer">
                <FaBasketShopping size={30} className="text-creamy" />
                <button  
                aria-label="Opens the Cart" className="text-sm hidden md:inline font-bold uppercase md:text-lg text-creamy">
                    Cart 
                </button>
                <span className=" bg-creamy font-bold text-browny rounded-full w-5 h-5 p-4 flex justify-center items-center">
                    {totalCartItems}
                </span>
            </motion.nav>
        </nav>
    )
}