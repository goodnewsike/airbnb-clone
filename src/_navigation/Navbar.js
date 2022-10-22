import Image from 'next/image';
import React from 'react';
import { AirbnbLogo } from '../_components';
import { navbar } from '../_helpers';

const Pill = () => {
   return (
      <div className="profile position-relative d-flex align-items-center">
         <div className="burgerIcon">
            <Image
               src="/icons/burgerMenu.svg"
               height="100%"
               width="100%"
               // loader={GraphCMSImageLoader}
               aria-label="product image"
               alt="tab__artwork"
               className="tab__image" 
            />
         </div>
         <div className="avatar ms-auto">
            <Image
               src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
               height="100%"
               width="100%"
               // loader={GraphCMSImageLoader}
               // layout="fill"
               aria-label="product image"
               alt="tab__artwork"
               className="tab__image" 
            />
         </div>
      </div>
   );
};

const Navbar = () => {
   return (
      <div className="container-fluid nav__bar">
         <div className="container h-100 p-0 d-flex align-items-center justify-content-between">
            <div className="logo">
               <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="">
                  <AirbnbLogo />
               </a>
            </div>
            <div className="tabs d-flex align-items-center">
               {navbar.map((item) => (
                  <button key={item.id} className="tab__item px-0 d-flex align-items-center">
                     {item.label}
                  </button>
               ))}
               <div className="search__icon ms-auto">
                  <Image
                     src="/icons/search.svg"
                     height="100%"
                     width="100%"
                     // loader={GraphCMSImageLoader}
                     aria-label="product image"
                     alt="tab__artwork"
                     className="tab__image" 
                  />
               </div>
            </div>
            <div className="actions d-flex align-items-center justify-content-end">
               <button className="become__host">Become a Host</button>
               <div className="globeIcon me-2">
                  <Image
                     src="/icons/globe.svg"
                     height="100%"
                     width="100%"
                     // loader={GraphCMSImageLoader}
                     aria-label="product image"
                     alt="tab__artwork"
                     className="tab__image" 
                  />
               </div>
               <Pill />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
