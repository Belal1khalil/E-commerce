import axios from "axios";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import CategorySlider from "../../components/CategorySlider/CategorySlider";



export default function Home() {
      const [products, setProducts] = useState()

  async  function getProducts() {
      try {
        const options = {
          url:"https://ecommerce.routemisr.com/api/v1/products",
          method:"GET",
        }
        let {data} = await axios(options);
        
         setProducts(data.data)
      } catch (error) {
        console.log(error)
      }  
     } 

     useEffect(()=>{
      getProducts()
     } , [])
  return (
   <>
   <HomeSlider/>
   <CategorySlider/>
   {!products ? <Loading/> :  <div className="grid sm:gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
     
   {
    products.map((product) =>
      <Card key={product.id} productInfo = {product} />
    )}
    </div>
   }
   </>
  )
}
