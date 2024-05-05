import { createContext, useEffect, useState } from "react";
import { book_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});
    var currentActiveMenu = null;

    const setCurrentActiveMenu = (menu) => {
        currentActiveMenu = menu;
    }

    const getCurrentActiveMenu = () => {
        return currentActiveMenu;
    }

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            
            if(cartItems[item] > 0){
                let itemInfo = book_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }

        return totalAmount;
    }
    
    const contextValue = {
        book_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        setCurrentActiveMenu,
        getCurrentActiveMenu
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;