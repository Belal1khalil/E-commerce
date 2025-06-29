import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../components/context/Cart.context";
import { UserContext } from "../../components/context/User.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCity, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { cartInfo } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleCashorder(values) {
    let toastId = toast.loading("Processing your order...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
        method: "POST",
        headers: {
          token,
        },
        data: values,
      };
      const { data } = await axios.request(options);

      if (data.status === "success") {
        toast.success("Your Cash Order Created successfully");
        setTimeout(() => {
          navigate("/allorders");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async function handleOnlinePayment(values) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=${location.origin}`,
        method: "POST",
        headers: {
          token,
        },
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.status === "success") {
        toast.loading("redirecting you to stripe");
        setTimeout(() => {
          location.href = data.session.url;
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    onSubmit: (values) => {
      if (paymentMethod === "cash") handleCashorder(values);
      else handleOnlinePayment(values);
    },
  });
  return (
    <>
       <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Shipping Address
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaCity />
            </span>
            <input
              type="text"
              name="shippingAddress.city"
              placeholder="Enter your city"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formik.values.shippingAddress.city}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.shippingAddress?.city && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingAddress.city}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaPhoneAlt />
            </span>
            <input
              type="tel"
              name="shippingAddress.phone"
              placeholder="Enter your phone number"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formik.values.shippingAddress.phone}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.shippingAddress?.phone && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingAddress.phone}
            </p>
          )}
        </div>

        {/* Address Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Details
          </label>
          <div className="relative">
            <span className="absolute top-3 left-3 text-gray-400">
              <FaMapMarkedAlt />
            </span>
            <textarea
              rows="4"
              name="shippingAddress.details"
              placeholder="Enter full address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              value={formik.values.shippingAddress.details}
              onChange={formik.handleChange}
            ></textarea>
          </div>
          {formik.errors.shippingAddress?.details && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingAddress.details}
            </p>
          )}
        </div>

        {/* Payment Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <button
            type="submit"
            onClick={() => setPaymentMethod("cash")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200"
          >
            <i className="fa-solid fa-money-bill-wave me-2"></i>Cash Order
          </button>
          <button
            type="submit"
            onClick={() => setPaymentMethod("online")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200"
          >
            <i className="fa-solid fa-credit-card me-2"></i>Online Payment
          </button>
        </div>
      </form>
    </>
  );
}
