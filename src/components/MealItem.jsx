import { useContext } from "react"
import { currencyFormatter } from "../util/formatting"
import { motion } from "framer-motion";
import CartContext from "../store/CartContext";

export default function MealItem({meal}){
    const cartCtx= useContext(CartContext);

    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }
    
    const Images_API=import.meta.env.VITE_API_BACKEND_URL;
    return <li 
        className="flex flex-col bg-[#1d1a16] overflow-hidden shadow-lg justify-center items-center gap-2 lg:gap-4 w-full max-h-[34rem]  md:max-h-[44rem] text-center">
        <img
        className="w-full h-[15rem] lg:h-[20rem] object-cover aspect-[4/6]"
        src={`${Images_API}${meal.image}`}
        alt={"Meal-" + meal.name}
        />
        <div className="flex flex-col gap-6 justify-start items-center px-3 py-1 lg:px-4 lg:py-2 w-full h-[13rem]">
            <h3 className="text-lg md:text-xl text-creamy font-bold uppercase">{meal.name}</h3>
            <p className="text-creamy/80 bg-[#312c1d] px-4 py-2 w-fit rounded-lg">
                {currencyFormatter.format(meal.price)}
            </p>   
            <p className="text-base text-creamy lg:text-lg">{meal.description}</p> 
        </div> 
        <div className="px-4 py-6 flex justify-center items-center">
            <motion.button 
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            transition={{duration:0.05}}
            onClick={handleAddMealToCart}
            className="text-creamy border-2 border-creamy hover:border-transparent hover:bg-creamy transition duration-300
             hover:text-browny text-sm md:text-base w-fit font-medium px-4 py-2 lg:px-6 lg:py-4">
                Add to Cart
            </motion.button>
        </div>    
        
    </li>
}