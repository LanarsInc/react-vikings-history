import { FC, useEffect } from 'react';

interface PeriodSwitcherProps {
  urls: string[] | null;
  setIsImagesLoaded: (state: boolean) => void;
}

const ImagesLoader: FC<PeriodSwitcherProps> = ({ urls, setIsImagesLoaded }) => {
  const cacheImages = async (imagesSrs: string[]) => {
    const promises = imagesSrs.map((src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (e) => {
          reject(e);
        };
      });
    });

    await Promise.all(promises);

    setIsImagesLoaded(true);
  };

  useEffect(() => {
    if (urls) {
      cacheImages(urls);
    }
  }, [urls]);

  return null;
};

export default ImagesLoader;
