import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/User.context";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function Order() {
  const { token } = useContext(UserContext);
  let { id } = jwtDecode(token);
  const [orders, setOrders] = useState(null);

  async function Getuserorders() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Getuserorders();
  }, []);

  return (
    <>
      {orders ? (
        <section className="p-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-300 rounded-2xl shadow-md bg-white p-6 mb-4"
            >
              {/* العنوان */}
              <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Order Id</h2>
                  <span className="text-gray-600 text-sm">{order.id}</span>
                </div>
                <div className="flex gap-2">
                  {order.isDelivered ? (
                    <span className="bg-lime-500 text-white px-3 py-1 text-sm rounded-full font-medium">
                      تم الاستلام
                    </span>
                  ) : (
                    <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full font-medium">
                      قيد التوصيل
                    </span>
                  )}
                  {order.isPaid ? (
                    <span className="bg-lime-500 text-white px-3 py-1 text-sm rounded-full font-medium">
                      تم الدفع
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-medium">
                      غير مدفوع
                    </span>
                  )}
                </div>
              </header>

              {/* المنتجات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
                {order.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={item.product.imageCover}
                      alt="product"
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-base font-semibold text-gray-700 mb-1">
                      {item.product.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.price} EGP</p>
                  </div>
                ))}
              </div>

              {/* ملخص الطلب */}
              <div className="border-t pt-4 flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
                <div>
                  <p>
                    <span className="font-semibold text-gray-800">
                      createdAt:
                    </span>{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-EG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Payment Status:
                    </span>{" "}
                    {order.isPaid ? "Paid" : "Not Paid"}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Total Price:
                    </span>{" "}
                    {order.totalOrderPrice} L.E
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
