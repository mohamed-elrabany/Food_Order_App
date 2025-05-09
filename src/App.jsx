import Header from "./components/Header";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import UserProgressContextProvider from "./store/UserProgressContext";
import Checkout from "./components/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
    
  );
}

export default App;
