import React, { FC, useState, useEffect } from 'react';

interface ProgressiveImgProps {
  placeholderSrc: string;
  src: string | null;
  alt: string;
  setIsMainImageLoaded: (state: boolean) => void;
}

const ProgressiveImg: FC<ProgressiveImgProps> = ({
  placeholderSrc,
  src,
  alt,
  setIsMainImageLoaded,
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
        setIsMainImageLoaded(true);
      };
    }
  }, [src]);

  return <img {...{ src: imgSrc }} className="image" alt={alt} />;
};
export default ProgressiveImg;
