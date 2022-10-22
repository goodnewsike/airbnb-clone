import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { dummyData } from '../../_helpers';

const ProductTabs = ({backgroundColor, activeTab, setActiveTab}) => {
   const carouselRef = useRef();
   const [active, setActive] = useState(0);
   const [htmlValue, setHtmlValue] = useState(null);

   const next = dummyData.length <= 9;
   const prev = active === 0 || dummyData.length <= 9;
   const top = dummyData.length - (active + 1) <= 8;

   useEffect(() => {
      let selector = document.querySelector('.caroosel-inner');
      if (typeof document !== undefined) setHtmlValue(selector);
   },[]);

   // const slider = document.querySelector('.caroosel-inner');
   const handleNext = useCallback(() => {
      if (htmlValue) {
         const carouselIndex = parseInt(getComputedStyle(htmlValue).getPropertyValue('--carousel-index'));
         if (carouselRef.current?.scrollWidth > carouselRef.current?.offsetWidth) {
            htmlValue.style.setProperty('--carousel-index', carouselIndex + 1);
            setActive(carouselIndex + 1);
         }
      }
   }, [htmlValue]);
   const handlePrev = useCallback(() => {
      if (htmlValue) {
         const carouselIndex = parseInt(getComputedStyle(htmlValue).getPropertyValue('--carousel-index'));
         htmlValue.style.setProperty('--carousel-index', carouselIndex - 1);
         setActive(carouselIndex - 1);
      }
   }, [htmlValue]);
   const handleTop = useCallback(() => {
      if (htmlValue) {
         const carouselIndex = parseInt(getComputedStyle(htmlValue).getPropertyValue('--carousel-index'));
         htmlValue.style.setProperty('--carousel-index', carouselIndex);
         setActive(carouselIndex);
      }
   }, [htmlValue]);
   const handleContextTop = useCallback(
      (e) => {
         e.preventDefault();
         if (htmlValue) {
            const carouselIndex = parseInt(getComputedStyle(htmlValue).getPropertyValue('--carousel-index'));
            htmlValue.style.setProperty('--carousel-index', carouselIndex);
            setActive(carouselIndex);
         }
      },
      [htmlValue],
   );
   const handleContextBottom = useCallback(
      (e) => {
         e.preventDefault();
         if (htmlValue && !top) {
            const carouselIndex = parseInt(getComputedStyle(htmlValue).getPropertyValue('--carousel-index'));
            htmlValue.style.setProperty('--carousel-index', carouselIndex - 1);
            setActive(carouselIndex - 1);
         }
      },
      [htmlValue, top],
   );

   return (
      <div className={classNames("tabs__list", {bgShadow: !!backgroundColor})}>
         <div className="container px-0 h-100 d-flex align-items-center position-relative">
            <>
               <button
                  onContextMenu={handleContextTop}
                  onClick={handlePrev}
                  className={classNames('prev', {hidden: prev})}>
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
               </button>
               <button
                  onContextMenu={handleContextBottom}
                  className={classNames(top ? 'top' : 'next', {hidden: next})}
                  onClick={top ? handleTop : handleNext}>
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
               </button>
            </>
            <div className="caroosel h-100 overflow-hidden">
               <ul ref={carouselRef} className="caroosel-inner tabs__list__inner h-100 d-flex align-items-center">
                  {dummyData?.map((item, i) => (
                     <li
                        key={item.id}
                        onClick={() => setActiveTab(i)}
                        className={classNames("me-4 d-flex flex-column align-items-center justify-content-center", {
                           active: i === activeTab,
                        })}>
                        <div className="img">
                           <Image
                              src={item.img}
                              height="100%"
                              width="100%"
                              // loader={GraphCMSImageLoader}
                              // layout="fill"
                              alt="tab__artwork"
                              className="" 
                           />
                        </div>
                        <p className="pt-2 text-nowrap">{item.label}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default ProductTabs;
