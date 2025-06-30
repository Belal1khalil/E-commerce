import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import CardBrand from "../../components/CardBrand/CardBrand";

export default function Brands() {
  const [brands, setBrands] = useState(null);

  async function GetBrands() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/brands",
      method: "GET",
    };
    let { data } = await axios.request(options);

    setBrands(data.data);
  }

  useEffect(() => {
    GetBrands();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Brands</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brands ? (
          brands.map((brand) => <CardBrand brandInfo={brand} key={brand._id} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
