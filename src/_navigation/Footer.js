import Image from 'next/image';
import React from 'react';

const Footer = () => {
   return (
      <footer className="container-fluid">
         <div className="container h-100 p-0 d-flex align-items-center justify-content-between">
            <div className="privacy d-flex align-items-center">
               <span className="">
                  &copy; {new Date().getFullYear()} Airbnb, Inc.
               </span>
               <a href="https://www.airbnb.com/terms/privacy_policy" className="">Privacy</a>
               <a href="https://www.airbnb.com/terms" className="">Terms</a>
               <a href="https://www.airbnb.com/sitemaps/v2" className="">Sitemap</a>
            </div>
            <div className="support d-flex align-items-center">
               <button className="language d-flex align-items-center">
                  <div className="langImg me-2">
                     <Image
                        src="/icons/globe.svg"
                        height="100%"
                        width="100%"
                        // loader={GraphCMSImageLoader}
                        // layout="fill"
                        aria-label="product image"
                        alt="tab__artwork"
                        className="tab__image" 
                     />
                  </div>
                  <span className="">English (US)</span>
               </button>
               <button className="currency mx-2">$ USD</button>
               <div className="support__resources d-flex align-items-center">
                  <span className="">Support & resources</span>
                  <div className="arrowUpIcon ms-2">
                     <Image
                        src="/icons/arrowUp.svg"
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
            </div>
         </div>
      </footer>
   )
}

export default Footer