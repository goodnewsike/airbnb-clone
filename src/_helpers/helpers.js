export function numberWithCommas(x) {
   if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   }
   return 0;
}

// function graphCmsLoader({src, width}) {
//    const match = /^(https?:\/\/media.graphcms.com)(?:\/[^\/]+)?\/([^\/]+)$/.exec(src);

//    if (!match) {
//       throw new Error('Invalid GraphCMS asset URL');
//    }

//    const [prefix, handle] = match.slice(1);
//    const resizedSrc = `${prefix}/resize=width:${width}/${handle}`;

//    return resizedSrc;
// }

// function GraphCMSImageLoader({ src, width, quality }) {
//    const relativeSrc = (src) => src.split("/").pop();
// `https://example.com/${src}?w=${width}&q=${quality || 75}`
//    return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
// }
