import axios from "axios";
import { useEffect, useState } from "react";
import CardCategory from "../../components/CardCategory/CardCategory";
import Loading from "../../components/Loading/Loading";

export default function Category() {
    const [categories, setCategories] = useState(null);
   async function GetCategories() {
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/categories",
            method:"GET",
        }
        let {data} = await axios.request(options);
         console.log(data.data);
        setCategories(data.data);
    }
    useEffect(()=>{
        GetCategories();
    } , [])
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories? (
           categories.map((category)=><CardCategory categoryInfo={category} key={category._id} />)
        ):(
            <Loading/>
        )}
      </div>
    </div>
  )
}
