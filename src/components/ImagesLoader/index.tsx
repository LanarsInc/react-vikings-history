import React, { FC, useEffect } from 'react';

interface PeriodSwitcherProps {
  urls: string[];
  setIsImagesLoaded: (state: boolean) => void;
}

const ImagesLoader: FC<PeriodSwitcherProps> = ({ urls, setIsImagesLoaded }) => {
  const cacheImages = async (imagesSrs: string[]) => {
    const promises = imagesSrs.map((src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsImagesLoaded(true);
  };

  useEffect(() => {
    cacheImages(urls);
  }, []);

  return null;
};

export default ImagesLoader;
