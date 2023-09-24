import { useState } from "react";
import { motion } from "framer-motion";

export default function OptimizedImage({
  figureClassName = "",
  imgClassName = "",
  loadingHeight = "16em",
  figureCaption,
  imageHeight,
  onImageLoad,
  figureStyle = {},
  ...rest
}) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => {
      setPulsing(false);
      if (onImageLoad) onImageLoad();
    }, 600);
  };
  return (
    <figure
      className={`${pulsing ? "imageLoading" : ""} ${figureClassName}`}
      style={figureStyle}
    >
      <motion.img
        // loading="lazy"
        className={imgClassName}
        initial={{ height: loadingHeight, opacity: 0 }}
        // style={{ height: imageLoading ? "6rem" : "auto" }}
        animate={{
          height: imageLoading ? loadingHeight : imageHeight,
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 0.4 } },
          { opacity: { delay: 0.5, duration: 0.4 } })
        }
        onLoad={imageLoaded}
        {...rest}
      />
      {figureCaption && <figcaption>{figureCaption}</figcaption>}
    </figure>
  );
}

// export default function OptimizedImage({
//   optimizerUrl = "/resources/image",
//   responsive,
//   src,
//   ...rest
// }) {
//   let url = src ? optimizerUrl + "?src=" + encodeURIComponent(src) : src;

//   let props = {
//     src: url + `&width=${rest.width || ""}&height=${rest.height || ""}`,
//   };

//   let largestImageWidth = 0;
//   let largestImageSrc;
//   if (responsive && responsive.length) {
//     let srcSet = "";
//     let sizes = "";
//     for (let { maxWidth, size } of responsive) {
//       if (srcSet) {
//         srcSet += ", ";
//       }
//       let srcSetUrl =
//         url + `&width=${size.width}&height=${size.height || ""} ${size.width}w`;
//       srcSet += srcSetUrl;

//       if (maxWidth) {
//         if (sizes) {
//           sizes += ", ";
//         }
//         sizes += `(max-width: ${maxWidth}px) ${size.width}px`;
//       }

//       if (size.width > largestImageWidth) {
//         largestImageWidth = size.width;
//         largestImageSrc = srcSetUrl;
//       }
//     }
//     props.srcSet = srcSet;
//     props.sizes = sizes || "100vw";
//     props.src = "";
//   }

//   if (largestImageSrc && (!rest.width || largestImageWidth > rest.width)) {
//     props.src = largestImageSrc;
//   }

//   console.log(props)
//   return <img {...rest} {...props} />;
// }
