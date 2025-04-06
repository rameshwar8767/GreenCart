import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";
export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const currency = import.meta.VITE_CURRENCY;
    const navigate = useNavigate()
    const [user, setUser] = useState(true)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
       let cartData =structuredClone(cartItems)
       if(cartData[itemId]){
            cartData[itemId] += 1;
       }else{
        cartData[itemId] = 1;
       }
       setCartItems(cartData)
       toast.success("Added to cart")
    }

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity
        setCartItems(cartData)
        toast.success("Cart updated")
    }

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems)
        if(cartData[itemId] ) {
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0) delete cartData[itemId]  // remove item from cart if quantity becomes zero
        }
        setCartItems(cartData)
        toast.success("Removed from cart")
    }

    const fetchProducts = async () => {
        setProducts(await dummyProducts)
    }

    useEffect(()=>{
        fetchProducts()
    }
    ,[])
    const value = {navigate, user, setUser, setIsSeller,currency, isSeller, showUserLogin, setShowUserLogin, products,updateCartItem, removeFromCart ,setProducts,addToCart, cartItems}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext)
}