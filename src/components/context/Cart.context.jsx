/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";


 // eslint-disable-next-line react-refresh/only-export-components
 export const CartContext = createContext(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
 

  export default function CartProvider( {children}) {
    const {token} = useContext(UserContext)
    const [cartInfo , setCartInfo] = useState(null);

      ////// Add Product To Cart ////////////
            async  function addProductToCart({productId}) {
                const loadingToaster = toast.loading("Adding Product To Cart...")
             try {
              const options = {
                url:"https://ecommerce.routemisr.com/api/v1/cart",
                method:"POST",
                headers:{
                 token,
                },
                data:{
                    productId,
                }
                }
               let {data} = await axios.request(options)
               if(data.status === "success") {
                 toast.success(data.message)
                 getCartProducts()
               }
               console.log(data);
           } catch (error) {
                toast.error(error.response.data.message);
           } finally {
                toast.dismiss(loadingToaster)
           }
            }

            //// Get Cart Products ////////////
         
            async  function getCartProducts() {
            try {
                const options = {
                    url:"https://ecommerce.routemisr.com/api/v1/cart",
                   method:"GET",
                   headers:{
                    token,
                   },   
                }
                const {data} = await axios.request(options)
                setCartInfo(data)
            } catch (error) {
                toast.error(error.response.data.message);
            }
             }

            /////// Remove Product From Cart ////////////
          
           async function removeProductFromCart({productId}) {
            const loadingToaster = toast.loading("Removing Product From Cart...")
             try {
              const options = {
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:"DELETE",
                headers:{
                    token,
                },
              }
              const {data} = await axios.request(options)
              if(data.status === "success") {
                toast.success("product has been deleted")
                setCartInfo(data)
              }
             } catch (error) {
                console.log(error.response.data.message)
             } finally {
                toast.dismiss(loadingToaster)
             }
            }

            /// clear cart ////////////
            async function clearCart()  {
              const loadingToaster = toast.loading("Clear cart .....")
              try {
                const options = {
                  url : "https://ecommerce.routemisr.com/api/v1/cart",
                  method:"DELETE",
                  headers:{
                      token,
                  },
                }
                const {data} = await axios.request(options);
                 if(data.message === "success") {
                  toast.success("Cart has been cleared successfully ")
                   setCartInfo({
                    numOfCartItems:0,
                   })
                 }
                console.log(data);
              } catch (error) {
                 console.log(error.response.data.message)
              } finally {
                toast.dismiss(loadingToaster)
              }

             }

             /// update count ////////////
             async  function UpdateCount({productId , count}) {
                const loadingToaster = toast.loading("Updating Product Count...")
             try {
              const options = {
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:"PUT",
                headers:{
                  token,
                },
                data:{
                  count,
                }
              }
              const {data} = await axios.request(options)
               if(data.status === "success") {
                toast.success("Product count has been updated")
                setCartInfo(data)
               }
              console.log(data);
             } catch (error) {
              toast(error)
             } finally {
                toast.dismiss(loadingToaster)
             }
               }

     return (
        <CartContext.Provider value={{addProductToCart ,getCartProducts ,cartInfo , removeProductFromCart , clearCart , UpdateCount }}>
           {children}
        </CartContext.Provider>
     )
 }