import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/context/Cart.context";
import ReactImageGallery from "react-image-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../components/Card/Card";

export default function Productdetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addProductToCart } = useContext(CartContext);
  const { id } = useParams();

  async function GetProductDetails() {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);

    setProductDetails(data.data);
  }

  async function RelatedProducts() {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/products?category=${productDetails.category._id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    setRelatedProducts(data.data);
  }

  useEffect(() => {
    if (productDetails === null) return;
    RelatedProducts();
  }, [productDetails]);

  useEffect(() => {
    GetProductDetails();
  }, [id]);

  return (
    <>
      {productDetails && relatedProducts ? (
        <>
          <section className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-2 border-primary-100 rounded-3xl shadow-xl bg-white p-6">
              <div className="md:col-span-4">
                <ReactImageGallery
                  items={productDetails.images.map((image) => ({
                    original: image,
                    thumbnail: image,
                  }))}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                />
              </div>

              <div className="md:col-span-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {productDetails.title}
                  </h2>
                  <h3 className="text-primary-600 text-lg font-medium mt-1">
                    {productDetails.category.name}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-md text-slate-600 font-semibold mb-1">
                    Product Description
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {productDetails.description}
                  </p>
                </div>

                {/* Price & Rating */}
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-green-600">
                    {productDetails.price} L.E
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500 font-medium">
                    <i className="fa-solid fa-star" />
                    <span className="text-slate-700">
                      {productDetails.ratingsAverage}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    addProductToCart({ productId: id });
                  }}
                  className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 transition duration-200 text-white font-semibold text-lg shadow-md"
                >
                  <i className="fa-solid fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800">
              Related Products
            </h2>
            <Swiper
              autoplay
              slidesPerView={6}
              spaceBetween={20}
              className="my-6"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {relatedProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  <Card productInfo={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
