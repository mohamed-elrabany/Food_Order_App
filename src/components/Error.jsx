import { div } from "framer-motion/client";
import { DiVim } from "react-icons/di";


export default function Error({title, message}){
    return(
        <div className="error">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{message}</p>
        </div>
    )
}