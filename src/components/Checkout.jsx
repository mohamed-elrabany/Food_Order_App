import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { useContext, useActionState } from "react";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import { UserProgressContext } from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { motion } from "framer-motion";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout({}) {
  
  const API=import.meta.env.VITE_API_BACKEND_URL;  
  const cartCtx = useContext(CartContext);
  const cartTotalPrice = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const userProgressCtx = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    `${API}/orders`,
    requestConfig
  );

  function handleFinish() {
    userProgressCtx.hideCheckOut();
    cartCtx.clearCart();
    clearData();
  }

  function handleClose() {
    userProgressCtx.hideCheckOut();
  }

  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries()); //{email : test@example.com}
    // send http request to the backend
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  const [formState, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );

  let actions = (
    <>
      <button
        onClick={handleClose}
        className="bg-transparent text-browny font-medium hover:bg-browny/20 transition duration-500 w-fit text-sm md:text-base  px-4 py-2 lg:px-6 lg:py-4"
      >
        Close
      </button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-browny hover:bg-browny/80 transition duration-300 text-white font-medium w-fit text-sm md:text-base  px-4 py-2 lg:px-6 lg:py-4"
      >
        Submit Order
      </motion.button>
    </>
  );

  if (data && !error) {
    return (
      <Modal
        className="bg-creamy text-black py-6 px-4 h-[40vh] w-[90%] md:w-[60%] lg:w-[60%]"
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2 className="font-bold text-2xl text-browny lg:text-4xl">Success!</h2>
        <p className="text-base lg:text-lg mt-2">Your order was submitted successfully.</p>
        <p className="text-base lg:text-lg mt-2">
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleFinish}
            className="bg-browny absolute bottom-5 hover:bg-browny/80 transition duration-300 text-white font-medium w-fit text-sm md:text-base px-4 py-2  lg:px-6 lg:py-4"
          >
            Okay
          </motion.button>
        </p>
      </Modal>
    );
  }

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  return (
    <Modal
      onClose={handleClose}
      open={userProgressCtx.progress === "checkout"}
      className="bg-creamy fixed text-black py-6 px-4 h-[90vh] lg:h-[60vh] w-[90%] md:w-[60%] lg:w-[60%]"
    >
      <form action={formAction}>
        <div className="bg-browny text-creamy p-8 flex flex-col md:flex-row md:justify-between md:items-center">
            <h2 className="text-2xl lg:text-4xl font-bold">Checkout</h2>
            <p className="text-lg lg:text-2xl font-medium">Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
        </div>
        
      <div className="mt-4">
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="flex gap-2">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
      </div>
        

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="flex absolute right-0 bottom-0 p-4 justify-end items-center gap-4">
          {" "}
          {actions}{" "}
        </p>
      </form>
    </Modal>
  );
}
