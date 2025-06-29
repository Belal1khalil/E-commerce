/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../context/Cart.context";
import { WishlistContext } from "../context/Wishlist.context";
import {  useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Card({ productInfo }) {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const {
    id,
    imageCover,
    title,
    price,
    category,
    description,
    ratingsAverage,
  } = productInfo;
  const { addProductToCart } = useContext(CartContext);
  const { addProductToWishlist } = useContext(WishlistContext);

  return (
    <>
      <div className="group relative rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white my-1">
        {/* Product Image & Hover Actions */}
        <div className="relative overflow-hidden">
          <img
            src={imageCover}
            alt="Product"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
            {[
              { icon: "fa-heart", tooltip: "Wishlist" },
              { icon: "fa-cart-shopping", tooltip: "Add to Cart" },
              { icon: "fa-eye", tooltip: "View" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group/icon w-10 h-10 bg-white text-primary-600 rounded-full flex items-center justify-center shadow-md hover:bg-primary-600 hover:text-white transition hover:scale-110 hover:rotate-6 cursor-pointer"
                onClick={() => {
                  if (item.icon === "fa-cart-shopping") {
                    addProductToCart({ productId: id });
                  } else if (item.icon === "fa-heart") {
                    addProductToWishlist({ productId: id });
                  } else if (item.icon === "fa-eye") {
                    navigate(`/product/${id}`)
                  }
                }}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span className="absolute -bottom-8  scale-0 group-hover/icon:scale-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all opacity-80 z-10">
                  {item.tooltip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 space-y-3">
          <header className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
              {title}
            </h3>

            <span className="text-xs font-semibold uppercase tracking-wide bg-primary-50 text-primary-600 px-2 py-1 rounded-full inline-block">
              {category.name}
            </span>
          </header>

          <p className="text-sm text-slate-500 line-clamp-2">{description}</p>

          <div className="flex justify-between items-center pt-2">
            <span className="text-base font-semibold text-green-600">
              {price}L.E
            </span>
            <div className="flex items-center text-sm text-slate-500 font-medium">
              <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
              {ratingsAverage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition duration-300 bg-white">

// <div className="relative overflow-hidden">
//   <img
//     src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg"
//     alt="Product"
//     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//   />
//   <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
//     <div className=" hover:scale-110 hover:rotate-6 transition-transform duration-300 w-10 h-10  bg-primary-600 rounded-full flex items-center justify-center shadow-md  text-white ">
//       <i className="fa-solid fa-heart cursor-pointer"></i>
//     </div>
//     <div className=" hover:scale-110 hover:rotate-6 transition-transform duration-300 w-10 h-10  bg-primary-600 rounded-full flex items-center justify-center shadow-md  text-white ">
//       <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
//     </div>
//     <div className=" hover:scale-110 hover:rotate-6 transition-transform duration-300 w-10 h-10  bg-primary-600 rounded-full flex items-center justify-center shadow-md  text-white ">
//       <i className="fa-solid  fa-eye cursor-pointer"></i>
//     </div>
//   </div>
// </div>

// <div className="p-4 space-y-3">
//   <header className="space-y-1">
//     <h3 className="text-lg font-semibold text-slate-800">Product Name</h3>
//     <p className="text-sm text-primary-500 font-medium capitalize">Category</p>
//   </header>

//   <p className="text-sm text-slate-500 line-clamp-2">This is a short description of the product that highlights key details or features.</p>

//   <div className="flex justify-between items-center pt-2">
//     <span className="text-base font-semibold text-slate-700">145 L.E</span>
//     <div className="flex items-center text-sm text-slate-500">
//       <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
//       <span>4.7</span>
//     </div>
//   </div>
// </div>
// </div>
