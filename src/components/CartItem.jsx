import { currencyFormatter } from "../util/formatting";

export default function CartItem({name, quantity, price, onIncreae, onDecrease, image}){
  const API=import.meta.env.VITE_API_BACKEND_URL;  
  return (
        <li className="flex justify-between items-center px-4 py-6 text-sm lg:text-base">
            <div className="flex justify-center items-center gap-4">
              <img src={`${API}/${image}`} className="w-16 h-16 object-cover rounded-full" alt="" />
              <p>
                {name} - {quantity} X {currencyFormatter.format(price)}
              </p>  
            </div>
            
            <p className="flex gap-4 items-center justify-center">
                <button onClick={onDecrease} className=" bg-black text-yellow-500 font-medium rounded-full px-2">-</button>
                <span className="text-base">{quantity}</span>
                <button onClick={onIncreae} className="bg-black text-yellow-500 font-medium rounded-full px-2">+</button>
            </p>
        </li>
    );
}