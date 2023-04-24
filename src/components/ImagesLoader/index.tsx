import { FC, useEffect, useCallback } from 'react';

interface PeriodSwitcherProps {
  urls: string[];
  setIsImagesLoaded: (state: boolean) => void;
}

const ImagesLoader: FC<PeriodSwitcherProps> = ({ urls, setIsImagesLoaded }) => {
  const cacheImages = useCallback(
    async (imagesSrs: string[]) => {
      const promises = imagesSrs.map((src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.src = src;
          // @ts-ignore
          img.onload = resolve();
          // @ts-ignore
          img.onerror = reject();
        });
      });

      await Promise.all(promises);

      setIsImagesLoaded(true);
    },
    [setIsImagesLoaded]
  );

  useEffect(() => {
    cacheImages(urls);
  }, [cacheImages]);

  return null;
};

export default ImagesLoader;
