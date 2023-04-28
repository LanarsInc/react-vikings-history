import React, { FC, useState, useEffect } from 'react';
import Home from './pages/Home';
import ImagesLoader from './components/ImagesLoader';
import { ImageUrls, SmallImageUrls } from './assets/images';
import useWindowSize from './hooks/useWindowSize';
import { BreakPoints } from './constants';

const App: FC = () => {
  const { width } = useWindowSize();
  const [urls, setUrls] = useState<string[] | null>(null);
  const [isMainImageLoaded, setIsMainImageLoaded] = useState(false);

  useEffect(() => {
    if (width && isMainImageLoaded) {
      setUrls(
        width > BreakPoints.EXTRA_SMALL
          ? Object.values(ImageUrls)
          : Object.values(SmallImageUrls)
      );
    }
  }, [width, isMainImageLoaded]);

  return (
    <>
      <Home setIsMainImageLoaded={setIsMainImageLoaded} />
      <ImagesLoader urls={urls} />
    </>
  );
};

export default App;
