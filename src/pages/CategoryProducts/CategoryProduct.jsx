import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";

export default function CategoryProduct() {
  const { id } = useParams();
  console.log("Category ID:", id);
  const [categoryProducts, setCategoryProducts] = useState([]);

  async function fetchCategoryProducts() {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/products?category=${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    setCategoryProducts(data.data);
  }
  useEffect(() => {
    fetchCategoryProducts();
  }, [id]);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Category Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {categoryProducts ? (
          categoryProducts.map((product) => (
            <Card key={product._id} productInfo={product} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
