/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";

 export const WishlistContext  =createContext(null)
   
 


 // eslint-disable-next-line react/prop-types
 export function WishlistProvider({children})  {

    const {token} = useContext(UserContext)
    const [WishListinfo , setWishListInfo] = useState(null);
     
    /// add product to wishlist

  async  function addProductToWishlist({productId}) {
    const loadingToaster = toast.loading("Waiting.....")
        try {
            const options = {
                url:"https://ecommerce.routemisr.com/api/v1/wishlist",
                method:"POST",
                headers:{
                    token,
                },
                data:{
                    productId,
                }
            }
             const {data} = await axios.request(options)
              if(data.status === "success") {
               toast.success(data.message)
                getWishlistProducts()
              }
        } catch (error) {
           console.log(error.response.data.message); 
        } finally {
            toast.dismiss(loadingToaster)
        }
    }

    /// get wishlist products

   async function getWishlistProducts() {
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/wishlist",
            method:"GET",
            headers:{
                token,
            }
        }
         const {data} =  await axios.request(options)
         if(data.status === "success") {
            setWishListInfo(data)
         }

         console.log(data);
    }

    /// remove product from wishlist
     async function removeProductFromWishlist(productId)  {
        const loadingToaster = toast.loading("Removing from wishlist.....")
      try {
        const options = {
            url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
            method:"DELETE",
            headers:{
                token,
            }
        }
            const {data} = await axios.request(options)
            if(data.status === "success") {
                toast.success(data.message)
                getWishlistProducts()
            }
            console.log(data);
      } catch (error) {
        console.log(error)
      } finally {
        toast.dismiss(loadingToaster)
      }
     }

    return <>
        <WishlistContext.Provider value={{addProductToWishlist , getWishlistProducts ,  WishListinfo , removeProductFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    </>
 }