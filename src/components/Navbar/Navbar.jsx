// import { NavLink } from "react-router-dom"
// import Logo from "../../assets/imgs/freshcart-logo.svg"
// export default function Navbar() {
//   return <>
//   <nav className="bg-slate-200 shadow-sm  py-3 fixed top-0 right-0 left-0  z-50">
//     <div className="container flex items-center gap-12  ">
//       <a href="">
//         <img src={Logo } alt=" FreshCart Logo" />
//       </a>

//       <ul className="flex items-center gap-5">
//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }} to="/home">Home</NavLink>
//         </li>
      
//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }} to="/products">Products</NavLink>
//         </li>

//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }}   to="/categories">Categories</NavLink>
//         </li>
//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }}  to="/brands">Brands</NavLink>
//         </li>
//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }}  to="/ordres">Orders</NavLink>
//         </li>
//       </ul>

//       <div className="cart relative ml-auto text-xl cursor-pointer">
//       <i className="fa-solid fa-cart-plus"></i>
//        <div className="cart-counter  flex justify-center items-center absolute h-5 w-5 rounded-full bg-primary-800 text-white right-0 top-0 translate-x-1/2 -translate-y-1/2">
//        <i className="fa-solid fa-spinner text-sm fa-spin "></i>
//        </div>
//       </div>
    
   

//       <ul className="flex items-center gap-5">
//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }}  to="/signup">Sign up</NavLink>
//         </li>

//         <li>
//           <NavLink className ={({isActive})=>{
          
//           return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//               isActive ? "before:!w-full font-bold " : ""
//             }`

//           }}  to="/login">Login</NavLink>
//         </li>

//         <li>
//           <a href="">
//           <i className="fa-solid fa-right-from-bracket text-lg"></i>
//           </a>
//         </li>

//       </ul>
//     </div>
//   </nav>
//   </>
// }

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../assets/imgs/freshcart-logo.svg";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

//   const navLinkClasses = ({ isActive }) => {
//     return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
//       isActive ? "before:!w-full font-bold" : ""
//     }`;
//   };

//   return (
//     <>
//       <nav className="bg-slate-200 shadow-sm py-3 fixed top-0 right-0 left-0 z-50">
//         <div className="container flex flex-wrap items-center justify-between">
//           <div className="flex items-center gap-12">
//             <a href="/">
//               <img src={Logo} alt="FreshCart Logo" className="h-8" />
//             </a>

//             {/* Desktop Navigation - shown on lg screens and up */}
//             <ul className="hidden lg:flex items-center gap-5">
//               <li>
//                 <NavLink className={navLinkClasses} to="/home">
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/products">
//                   Products
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/categories">
//                   Categories
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/brands">
//                   Brands
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/orders">
//                   Orders
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="flex items-center gap-5">
//             {/* Cart - always visible */}
//             <div className="cart relative text-xl cursor-pointer  md:mr-0 hover:scale-110 transition-transform duration-200">
//               <i className="fa-solid fa-cart-plus"></i>
//               <div className="cart-counter flex justify-center items-center absolute h-5 w-5 rounded-full bg-primary-800 text-white right-0 top-0 translate-x-1/2 -translate-y-1/2">
//                 <i className="fa-solid fa-spinner text-sm fa-spin"></i>
//               </div>
//             </div>

//             {/* User menu toggle - shown on all screens */}
//             <div className="relative">
//               <button
//                 onClick={toggleUserMenu}
//                 className="p-2  rounded-full text-black text-xl hover:scale-110 transition-transform duration-200 lg:hidden "
//               >
//                 <i className="fa-solid fa-user"></i>
//               </button>
              
//               {isUserMenuOpen && (
//                 <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                   <NavLink
//                     to="/signup"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => {
//                       toggleUserMenu();
//                       setIsMenuOpen(false); // Close mobile menu if open
//                     }}
//                   >
//                     Sign up
//                   </NavLink>
//                   <NavLink
//                     to="/login"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => {
//                       toggleUserMenu();
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Login
//                   </NavLink>
//                   <a
//                     href="/logout"
//                     className="block px-4  text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => {
//                       toggleUserMenu();
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Logout
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Mobile menu button - shown on md and below */}
//             <button
//               onClick={toggleMenu}
//               className="lg:hidden p-2 text-xl text-black rounded-md"
//             >
//               <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} `}></i>
//             </button>

//             {/* Desktop Auth Links - shown on lg screens and up */}
//             <ul className="hidden lg:flex items-center gap-5">
//               <li>
//                 <NavLink className={navLinkClasses} to="/signup">
//                   Sign up
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/login">
//                   Login
//                 </NavLink>
//               </li>
//               <li>
//                 <a href="/logout">
//                   <i className="fa-solid fa-right-from-bracket text-lg"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Menu - shown when toggled on md and below */}
//         {isMenuOpen && (
//           <div className="lg:hidden w-full bg-slate-100 py-4 px-4">
//             <ul className="flex flex-col gap-4">
//               <li>
//                 <NavLink className={navLinkClasses} to="/home" onClick={toggleMenu}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/products" onClick={toggleMenu}>
//                   Products
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/categories" onClick={toggleMenu}>
//                   Categories
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/brands" onClick={toggleMenu}>
//                   Brands
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={navLinkClasses} to="/orders" onClick={toggleMenu}>
//                   Orders
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }






import { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import Logo from "../../assets/imgs/freshcart-logo.svg";
import { UserContext } from "../context/User.context";

export default function Navbar() {
  
  const {token , logOut} = useContext(UserContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const navLinkClasses = ({ isActive }) => {
    return `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 ${
      isActive ? "before:!w-full font-bold" : ""
    }`;
  };

  return (
    <>
      <nav className="bg-slate-200 shadow-sm py-3 px-4 fixed top-0 right-0 left-0 z-50">
        <div className="container flex flex-wrap  justify-between">
          <div className="flex items-center gap-12">
            <a href="/">
              <img src={Logo} alt="FreshCart Logo"  />
            </a>

            {/* Desktop Navigation - shown on lg screens and up */}
              {token && <>
              
                <ul className="hidden lg:flex  items-center gap-5">
              <li>
                <NavLink className={navLinkClasses} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClasses} to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClasses} to="/categories">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClasses} to="/brands">
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClasses} to="/orders">
                  Orders
                </NavLink>
              </li>
            </ul>
              </>

              }
          </div>

          <div className="flex items-center gap-5">
            {/* Cart - always visible */}
            <div className="cart relative text-xl cursor-pointer md:mr-0 hover:scale-110 transition-transform duration-200">
             {token && <>
              <i className="fa-solid fa-cart-plus"></i>
              <div className="cart-counter flex justify-center items-center absolute h-5 w-5 rounded-full bg-primary-800 text-white right-0 top-0 translate-x-1/2 -translate-y-1/2">
                <i className="fa-solid fa-spinner text-sm fa-spin"></i>
              </div>
             </>

             }
            </div>

            {/* User menu toggle - shown on all screens */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="p-2 rounded-full text-black text-xl hover:scale-110 transition-transform duration-200 lg:hidden"
                aria-expanded={isUserMenuOpen}
                aria-label="User menu"
              >
                <i className="fa-solid fa-user"></i>
              </button>
              
              {/* User dropdown with smooth transition */}
              <div className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out transform ${
                isUserMenuOpen 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none"
              }`}>
               {!token && <>
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => {
                    toggleUserMenu();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign up
                </NavLink>
                <NavLink
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => {
                    toggleUserMenu();
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </NavLink>
               </>

               }
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => {
                    toggleUserMenu();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </a>
              </div>
            </div>

            {/* Mobile menu button - shown on md and below */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-xl text-black rounded-md "
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} transition-transform duration-300`}></i>
            </button>

            {/* Desktop Auth Links - shown on lg screens and up */}
            <ul className="hidden lg:flex items-center gap-5">
               {!token && <>
                <li>
                <NavLink className={navLinkClasses} to="/signup">
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClasses} to="/login">
                  Login
                </NavLink>
              </li>
                
               </>

               }
             {token && <>
              <li onClick={logOut}>
                <a className="hover:text-red-500 transition-colors duration-200">
                  <i className="fa-solid fa-right-from-bracket text-lg"></i>
                </a>
              </li>
             </>

             }
            </ul>
          </div>
        </div>

        {/* Mobile Menu - shown when toggled on md and below */}
        <div className={`lg:hidden w-full bg-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}>
          <div className="px-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink 
                  className={navLinkClasses} 
                  to="/" 
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={navLinkClasses} 
                  to="/products" 
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={navLinkClasses} 
                  to="/categories" 
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={navLinkClasses} 
                  to="/brands" 
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={navLinkClasses} 
                  to="/orders" 
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}