import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle";

import '../styles/Home.module.scss';
import '../styles/globals.scss';
import '../styles/index.scss';

import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   require('/dist/js/bootstrap.bundle.min.js');
  // }, []);
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    console.log = () => {};
  }

  return <Component {...pageProps} />
}

export default MyApp
