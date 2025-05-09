import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

export default function Cart({}) {
  const userProgressCtx = useContext(UserProgressContext);

  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckOut();
  }

  const cartCtx = useContext(CartContext);
  const cartTotalPrice = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal
      onClose={userProgressCtx.progress === "cart" ? handleHideCart : null}
      open={userProgressCtx.progress === "cart"}
      className="fixed bg-creamy text-black py-6 px-4 h-[90vh] w-[90%] md:w-[60%] lg:w-[60%]"
    >
      <h2 className="font-bold text-2xl lg:text-4xl p-8 bg-browny text-creamy">
        Your Cart
      </h2>

      {/* Scrollable area */}
      <div className="overflow-y-auto max-h-[calc(90vh-200px)] pr-2">
        <ul className="flex flex-col divide-y-2 divide-black/40">
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncreae={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          ))}
        </ul>
      </div>

      {/* Sticky Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-creamy p-4 border-t border-black/20">
        <p className="flex justify-end mb-4 font-bold text-base lg:text-lg text-[#46443c]">
          Total: {currencyFormatter.format(cartTotalPrice)}
        </p>
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={handleHideCart}
            className="bg-transparent text-browny font-medium hover:bg-browny/20 transition duration-500 w-fit text-sm md:text-base px-4 py-2 lg:px-6 lg:py-4"
          >
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <motion.button
            whileTap={{scale:0.95}}
              onClick={handleGoToCheckout}
              className="bg-browny hover:bg-browny/80 transition duration-300 text-white font-medium w-fit text-sm md:text-base px-4 py-2 lg:px-6 lg:py-4"
            >
              Go to Checkout
            </motion.button>
          )}
        </div>
      </div>
    </Modal>
  );
}
