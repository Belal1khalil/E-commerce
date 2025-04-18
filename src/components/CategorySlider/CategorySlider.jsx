import axios from "axios"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loading from "../Loading/Loading";
import { Autoplay } from "swiper/modules";

export default function CategorySlider() {
const [categories, setCategories] = useState(null)

  async function getcategories() {
       const options = {
        url: "https://ecommerce.routemisr.com/api/v1/categories",
        method:"GET"
       }
         let {data} = await axios.request(options)
         setCategories(data.data)
       
    }
    useEffect(()=>{
       getcategories()
    } , [])
  return (
    <>
     <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Shop Popular Categories
          </h2>
     {!categories ? <Loading/> : <Swiper 
     slidesPerView={6} 
     loop={true}
     modules={[Autoplay]}
     autoplay={{
     delay: 2000, 
     disableOnInteraction: false, 
      }} 
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
       {categories.map((category)=> (
       <SwiperSlide key={category._id} >
          
        <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white">
         <div className="relative h-64">
           <img 
               src={category.image} 
               alt={category.name}
               className="w-full h-full object-cover" 
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
               <h3 className="text-white text-xl font-bold p-4">{category.name}</h3>
             </div>
         </div>
        </div>

       </SwiperSlide>
       ))}
     </Swiper> }
     </section>
    </>
  )
}
