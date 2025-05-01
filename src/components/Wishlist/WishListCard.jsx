/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WishlistContext } from "../context/Wishlist.context";
import { CartContext } from "../context/Cart.context";

export default function WishlistCard({ WishListInfo }) {
  const { imageCover, price, slug , id } = WishListInfo;
  const { removeProductFromWishlist } = useContext(WishlistContext);
      const {addProductToCart} =  useContext(CartContext)

  return (
    <div className="mt-6 p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white relative flex flex-col md:flex-row gap-4 md:items-center">
      
      {/* Image + Info */}
      <div className="flex gap-4 w-full md:w-auto">
        <img
          src={imageCover}
          alt={slug}
          className="w-28 h-28 rounded-lg border-2 border-primary-600 object-cover shadow-sm"
        />
        <div className="flex flex-col justify-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{slug}</h3>
          <p className="text-primary-700 font-bold text-base">{price} $</p>
          <button
          onClick={()=>{
            addProductToCart({productId:id})
            
          }}
          
          className="bg-primary-700 hover:bg-primary-800 transition-colors text-white font-semibold px-4 py-2 rounded-lg w-fit">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
      onClick={() => removeProductFromWishlist(WishListInfo.id)}
        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 w-9 h-9 flex items-center justify-center transition-transform hover:rotate-90"
        aria-label="Remove from wishlist"
        title="Remove from wishlist"
      >
        <i className="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
  );
}
