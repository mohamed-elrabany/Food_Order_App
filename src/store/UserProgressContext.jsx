import { createContext } from "react";
import { useState } from "react";

export const UserProgressContext= createContext({
    progress: '', // cart, checkout
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckOut: ()=>{},
    hideCheckOut: ()=>{},
});

function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress]= useState();

    function showCart(){
        setUserProgress('cart');
        console.log('Show Cart!');
    }
    function hideCart(){
        setUserProgress('');
        console.log("Hide Cart!");
    }
    function showCheckOut(){
        setUserProgress('checkout');
        console.log('Show Checkout!')
    }
    function hideCheckOut(){
        setUserProgress('');
        console.log("Hide Checkout!");
    }


    const userProgressCtx={
        progress: userProgress,
        showCart,
        hideCart,
        showCheckOut,
        hideCheckOut
    }

    return <UserProgressContext.Provider value={userProgressCtx}>
        {children}
    </UserProgressContext.Provider>
}

export default UserProgressContextProvider;