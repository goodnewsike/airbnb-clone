import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const Product = ({ productData, id, imgs, location, rating, name, availableDate, cost }) => {
   const [like, setLike] = useState();

   return (
      <div key={id} className="product col-md-3">
         <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="">
            <div className="product__inner mb-5">
               <div className="img__wrapper mb-2">
                  <Swiper
                     navigation={true}
                     modules={[Navigation, Pagination]}
                     className="mySwiper"
                     pagination={{
                        dynamicBullets: true,
                     }}
                  >
                     <div onClick={() => setLike((t) => !t)} className="heart">
                        {like ? (
                           <Image
                              src="/icons/unlike.svg"
                              height="100%"
                              width="100%"
                              // loader={GraphCMSImageLoader}
                              aria-label="product image"
                              alt="tab__artwork"
                              className="tab__image" 
                           />
                        ) : (
                           <Image
                              src="/icons/unlike.svg"
                              height="100%"
                              width="100%"
                              // loader={GraphCMSImageLoader}
                              aria-label="product image"
                              alt="tab__artwork"
                              className="tab__image" 
                           />
                        )}
                     </div>
                     {imgs.map((item) => (
                        <SwiperSlide key={item}>
                           <div className="img">
                              <Image
                                 src={item}
                                 height="100%"
                                 width="100%"
                                 unoptimized={true}
                                 // loader={GraphCMSImageLoader}
                                 // layout="fill"
                                 aria-label="product image"
                                 alt="tab__artwork"
                                 className="tab__image" 
                              />
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
               <div className="d-flex align-items-center justify-content-between">
                  <h6 className="">{location}</h6>
                  <div className="rating d-flex align-items-center">
                     <div className="rate mb-2 me-1">
                        <Image
                           src="/icons/star.svg"
                           height="100%"
                           width="100%"
                           // loader={GraphCMSImageLoader}
                           aria-label="product image"
                           alt="tab__artwork"
                           className="tab__image" 
                        />
                     </div>
                     <span className="">{rating}</span>
                  </div>
               </div>
               <p className="name">{name}</p>
               <p className="date">{availableDate}</p>
               <p className="cost"><span className="">${cost}</span> night</p>
            </div>
         </a>
      </div>
   );
};

export default Product;