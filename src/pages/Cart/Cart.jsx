import { useContext, useEffect } from "react";
import { CartContext } from "../../components/context/Cart.context";
import Loading from "../../components/Loading/Loading";
import Cartitem from "../../components/CartItem/Cartitem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { getCartProducts, cartInfo, clearCart } = useContext(CartContext);

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section>
          <div className="flex jus items-center gap-8 px-4 py-2 ">
            <i className="fa-brands fa-opencart text-3xl"></i>
            <h2 className="text-xl text-slate-600 font-semibold relative before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-3 before:top-1/2 before:-translate-y-1/2  ">
              Your Shopping Cart
            </h2>
          </div>
          {cartInfo.numOfCartItems === 0 ? (
            <div className="mt-6 bg-gray-100 rounded-md p-5 shadow-md border border-gray-300 flex flex-col items-center justify-center gap-3">
              <h2 className="text-xl text-slate-600 font-semibold text-center mt-8">
                Oops! Your Cart is Empty. start shopping now by clicking the
                button below and find something you love!
              </h2>
              <Link
                to="/"
                className="btn bg-primary-600 hover:bg-primary-700 transition-colors duration-300 text-white"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="space-y-4 mt-8">
              {cartInfo?.data.products.map((product) => (
                <Cartitem key={product._id} productInfo={product} />
              ))}
              <div className=" bg-gray-200 mx-4 opacity-100 rounded-xl shadow-sm p-6 border border-gray-400 ">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4">
                  <div className="border-t border-gray-300 pt-3 flex justify-between">
                    <span className="text-gray-800 font-bold">Total</span>
                    <span className="text-green-600 font-bold text-lg">
                      {" "}
                      {cartInfo.data.totalCartPrice} L.E
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={"/checkout"}
                    className=" block  text-center w-full btn bg-primary-700 hover:bg-primary-800  text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <i className="fa-solid fa-dollar-sign  mr-2"></i>
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={() => {
                      clearCart();
                    }}
                    className="w-full btn bg-red-800 hover:bg-red-900  text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <i className="fa-solid fa-trash mr-2"></i>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
