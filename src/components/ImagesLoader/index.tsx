import { FC, useEffect } from 'react';

interface PeriodSwitcherProps {
  urls: string[] | null;
}

const ImagesLoader: FC<PeriodSwitcherProps> = ({ urls }) => {
  const cacheImages = (imagesSrs: string[]) => {
    imagesSrs.map((src: string) => {
      return new Promise(() => {
        const img = new Image();

        img.src = src;
      });
    });
  };

  useEffect(() => {
    if (urls) {
      cacheImages(urls);
    }
  }, [urls]);

  return null;
};

export default ImagesLoader;
