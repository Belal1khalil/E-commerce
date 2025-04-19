/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../context/Cart.context";

// eslint-disable-next-line no-unused-vars
   export default function CartItem({productInfo}) {
    // eslint-disable-next-line no-unused-vars
    const { count , price , product } = productInfo
    const { imageCover, title, category , id } = product;
      const { removeProductFromCart , UpdateCount}= useContext(CartContext)
    return <>
      <div className=" p-4">
        {/* Cart Item */}
        <div className="relative w-full bg-gray-200 opacity-100 rounded-xl shadow-sm p-6 border border-gray-400  flex justify-center items-center">
          <button onClick={()=>{
           removeProductFromCart({productId:id})
          }} className="absolute w-6 text-white h-6 rounded-full top-4 right-4 bg-red-600 hover:bg-red-700 transition-colors duration-300">
            <i className="fa-solid fa-xmark"></i>
          </button>
  
          <div className="flex flex-col grow sm:flex-row items-center gap-6">
            {/* Product Image */}
            <img
              src={imageCover}
              alt={title}
              className="w-28 h-28 object-cover rounded-lg border border-gray-300"
            />
  
            {/* Product Info */}
            <div className="flex-1 space-y-3 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="  uppercase  font-bold  bg-primary-50 text-primary-600 px-4 py-1 rounded-full w-fit ">
                 <span className="text-gray-700 text-xs font-bold">{category.name}</span>
              </p>
  
              {/* Quantity Section */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Qty:</span>
                  <div className="flex items-center border overflow-hidden shadow-sm rounded-md">
                    <div className="minus"  onClick={()=>{
                        UpdateCount({productId:id , count:count - 1})
                    }}>
                      <i className="fa-solid fa-minus w-8 h-8 rounded-full flex justify-center items-center bg-gray-300 border border-gray-400 text-black text-md   cursor-pointer"></i>
                    </div>
                    <span className="w-10 text-center font-medium text-sm">{count}</span>
                    <div className="plus" onClick={()=>{
                        UpdateCount({productId:id , count:count + 1})
                    }}>
                      <i className="fa-solid fa-plus w-8 h-8 rounded-full flex justify-center items-center bg-gray-300 border border-gray-400 text-black text-md  cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-bold text-green-600">{price} L.E</p>
            </div>
          </div>
        </div>
  

       
      </div>
      
    </>;
  }