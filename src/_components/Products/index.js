import React, { useEffect, useState } from 'react';
import { dummyData } from '../../_helpers';
import Product from './Product';
import Map, {Marker} from 'react-map-gl';
import { ListIcon, MapIcon } from '..';

import 'mapbox-gl/dist/mapbox-gl.css';
import ProductTabs from './ProductTabs';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ29vZG5ld3Npa2UiLCJhIjoiY2w5azJybm81MTFsMTNvcjc5c2c4bGc3bCJ9.xCG8UPyfH__GM-dFS_a60A';

const Products = ({switchToMap, setSwitchToMap}) => {
   const [activeTab, setActiveTab] = useState(0);
   const { activeCode, contents } = dummyData[activeTab];
   const [backgroundColor, setBackgroundColor] = useState(false);

   const changeNavbarColor = () => {
      if (window.scrollY >= 2) {
         setBackgroundColor(true);
      } else {
         setBackgroundColor(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', changeNavbarColor);
      return () => {
         window.removeEventListener('scroll', changeNavbarColor);
      };
   }, []);

   return (
      <div className="container-fluid products p-0 pb-5 position-relative">

         <ProductTabs backgroundColor={backgroundColor} activeTab={activeTab} setActiveTab={setActiveTab} />

         <div onClick={() => setSwitchToMap((t) => !t)} className="show">
            {switchToMap ? (
               <>
                  <span className="me-2">Show list</span>
                  <ListIcon />
               </>
            ) : (
               <>
                  <span className="me-2">Show map</span>
                  <MapIcon />
               </>
            )}
         </div>

         {switchToMap ? (
            <div className="map">
               <Map
                  initialViewState={{
                     longitude: -122.4,
                     latitude: 37.8,
                     zoom: 14
                  }}
                  style={{width: '100%', height: '100%'}}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  mapboxAccessToken={MAPBOX_TOKEN}
               >
                  <Marker longitude={-122.4} latitude={37.8} color="red" />
               </Map>
            </div>
         ) : (
         <div className="container p-0">
            <div key={activeCode} className="row mx-n5 pt-4">
               {contents.map((item) => (
                  <Product key={item.id} productData={item} {...item} />
               ))}
            </div>
         </div>
         )}
      </div>
   )
}

export default Products;
