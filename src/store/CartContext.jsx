import { createContext, useReducer } from "react";

const CartContext =createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
    clearCart: ()=> {}
})

function cartReducer(state, action){ // to update the state --> [action is an object]
    if(action.type === 'ADD_ITEM'){
        //...update the state to add a meal
        const existingCartItemIndex= state.items.findIndex(
            (item)=> item.id === action.item.id 
        );

        const updatedItems=[...state.items];
        if(existingCartItemIndex > -1){ // then items already exists
            const existingCartItem=state.items[existingCartItemIndex];
            const updatedItem={
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            }
            updatedItems[existingCartItemIndex]= updatedItem;
        }else{
            updatedItems.push({...action.item, quantity: 1});
        }    
        return {...state, items: updatedItems}; 
    }
    if(action.type === 'REMOVE_ITEM'){
        //... remove a meal from the state
        const existingCartItemIndex= state.items.findIndex(
            (item)=> item.id === action.id
        );
        
        const existingItem= state.items[existingCartItemIndex];
        const updatedItems=[...state.items];
        
        if(existingItem.quantity === 1){           
            updatedItems.splice(existingCartItemIndex,1);            
        }else{
            const updatedItem={
                ...existingItem,
                quantity: existingItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex]= updatedItem;        
        }
        return {...state, items: updatedItems}
    };

    if(action.type==='CLEAR_CART'){
        return { ...state, items:[] };
    }
    return state;
}

export function CartContextProvider({ children }){
    const [ cart, dispatchCartAction ]=useReducer(cartReducer, { items: []});
 
    function addItem(item){
        dispatchCartAction({type: 'ADD_ITEM', item });
    }
    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM', id});
    }
    function clearCart(){
        dispatchCartAction({type: 'CLEAR_CART'})
    }
    
    const cartContext={
        items: cart.items,
        addItem,
        removeItem,
        clearCart,
    }
    console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext;