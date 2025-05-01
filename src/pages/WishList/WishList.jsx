import { useContext, useEffect } from "react";
import WishlistCard from "../../components/Wishlist/WishListCard";
import { WishlistContext } from "../../components/context/Wishlist.context";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";



export default function WishList() {
     const {getWishlistProducts , WishListinfo} =  useContext(WishlistContext)
   
    useEffect(()=>{
        getWishlistProducts()
    } , [])
  return  <>
    {WishListinfo === null ? <Loading/> :
      <section>
         <div className="flex gap-8 items-center mb-6 mx-2 ">
            <i className="fa-brands fa-opencart text-3xl"></i>
            <h2 className="text-xl text-slate-600 font-semibold pl-4 relative before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-1 before:top-1/2 before:-translate-y-1/2">Your Wish List Cart</h2>
            </div>

            {WishListinfo.count == 0 ?
                <div className="mt-6 bg-gray-200 p-5 rounded-md shadow-md flex justify-center items-center flex-col gap-2 ">
                <h2>
                   Oops! Your Wish List Cart is empty , Start Shopping now by Clicking the button below and find something you love !
                </h2>
                <Link to="/" className="btn bg-primary-600 hover:bg-primary-700 transition-colors duration-300 cursor-pointer text-white"> 
                    Back to Home
                </Link>
             </div> : <>
              <div>
                {WishListinfo?.data?.map((product)=>(
                    <WishlistCard key={product.id} WishListInfo={product} />
                
                ))

                }
              </div>
             </>

            }
      </section>
    }
     </>
  
}
