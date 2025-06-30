
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/imgs/freshcart-logo.svg";
import { UserContext } from "../context/User.context";
import { CartContext } from "../context/Cart.context";
import { WishlistContext } from "../context/Wishlist.context";

export default function Navbar() {
  const { token, logOut } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { cartInfo, getCartProducts } = useContext(CartContext);
  const { WishListinfo, getWishlistProducts } = useContext(WishlistContext);

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    getWishlistProducts();
  }, []);

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
        <div className="container flex flex-nowrap  justify-between space-x-3">
          <div className="flex items-center gap-12">
            <a href="/">
              <img src={Logo} alt="FreshCart Logo" />
            </a>

            {/* Desktop Navigation - shown on lg screens and up */}
            {token && (
              <>
                <ul className="hidden lg:flex  items-center gap-5">
                  <li>
                    <NavLink className={navLinkClasses} to="/">
                      Home
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
                    <NavLink className={navLinkClasses} to="/allorders">
                      Orders
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div className="flex items-center gap-5">
            {/* Cart - always visible */}
            <Link
              to="/cart"
              className="cart relative text-xl cursor-pointer md:mr-0 hover:scale-110 transition-transform duration-200"
            >
              {token && (
                <>
                  <i className="fa-solid fa-cart-plus"></i>
                  <div className="cart-counter text-sm font-bold flex justify-center items-center absolute h-5 w-5 rounded-full bg-primary-800 text-white right-0 top-0 translate-x-1/2 -translate-y-1/2">
                    {/* <i className="fa-solid fa-spinner text-sm fa-spin"></i> */}
                    {cartInfo === null ? (
                      0
                    ) : (
                      <span className="text-xs font-bold text-white">
                        {cartInfo?.numOfCartItems}
                      </span>
                    )}
                  </div>
                </>
              )}
            </Link>

            <Link
              to="/wishlist"
              className="cart relative text-xl cursor-pointer md:mr-0 hover:scale-110 transition-transform duration-200"
            >
              {token && (
                <>
                  <i className="fa-regular fa-heart"></i>
                  <div className="cart-counter text-sm font-bold flex justify-center items-center absolute h-5 w-5 rounded-full bg-primary-800 text-white right-0 top-0 translate-x-1/2 -translate-y-1/2">
                    {/* <i className="fa-solid fa-spinner text-sm fa-spin"></i> */}
                    {cartInfo === null ? (
                      0
                    ) : (
                      <span className="text-xs font-bold text-white">
                        {WishListinfo?.count}
                      </span>
                    )}
                  </div>
                </>
              )}
            </Link>

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
              <div
                className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out transform ${
                  isUserMenuOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {!token && (
                  <>
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
                )}
                {token && (
                  <>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => {
                        toggleUserMenu();
                        setIsMenuOpen(false);
                        logOut();
                      }}
                    >
                      Logout
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button - shown on md and below */}
            {token && (
              <>
                <button
                  onClick={toggleMenu}
                  className="lg:hidden p-2 text-xl text-black rounded-md "
                  aria-expanded={isMenuOpen}
                  aria-label="Main menu"
                >
                  <i
                    className={`fa-solid ${
                      isMenuOpen ? "fa-xmark" : "fa-bars"
                    } transition-transform duration-300`}
                  ></i>
                </button>
              </>
            )}

            {/* Desktop Auth Links - shown on lg screens and up */}
            <ul className="hidden lg:flex items-center gap-5">
              {!token && (
                <>
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
              )}
              {token && (
                <>
                  <li onClick={logOut}>
                    <a className="hover:text-red-500 transition-colors duration-200">
                      <i className="fa-solid fa-right-from-bracket text-lg"></i>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Mobile Menu - shown when toggled on md and below */}
        <div
          className={`lg:hidden w-full bg-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
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
                <Link
                  className={navLinkClasses}
                  to="/allorders"
                  onClick={() => {
                    toggleMenu();
                    setIsUserMenuOpen(false);
                  }}
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
