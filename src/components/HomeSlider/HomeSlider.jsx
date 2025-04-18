import img1 from "../../assets/imgs/slider-image-1.jpeg";
import img2 from "../../assets/imgs/slider-image-2.jpeg";
import img3 from "../../assets/imgs/slider-image-3.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';

export default function HomeSlider() {
  return (
    <>
    <section className="grid grid-cols-12 mb-8">
        <div className="col-span-8">
         <Swiper 
         style={{height:"100%"}}  
         loop={true} 
         modules={[Autoplay]}
            autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
             }} 
         className="mySwiper"
         >
            <SwiperSlide  style={{height:"100%"}}>
                <img 
                src={img3} 
                className="w-full h-full object-cover rounded-sm "
                 alt="" />
            </SwiperSlide>
            <SwiperSlide  style={{height:"100%"}} >
                <img 
                src={img2} 
                className="w-full h-full object-cover rounded-sm " 
                alt="" />
            </SwiperSlide>
            <SwiperSlide  style={{height:"100%"}}>
                <img 
                src={img1} 
                className="w-full h-full object-cover rounded-sm" 
                alt="" />
            </SwiperSlide>
         </Swiper>
        </div>
        <div className="col-span-4">
          <div className="h-1/2">
             <img 
              src={img1}
             className="w-full h-full object-cover rounded-sm "
               alt="" />
           </div>
         
           <div className="h-1/2 ">
           <img 
                src={img2}
               className="w-full h-full object-cover rounded-sm"
               alt="" />
           </div>
        </div>
    </section>
    </>
  )
}
