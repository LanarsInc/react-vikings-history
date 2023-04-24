import React, { FC, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ImagesLoader from './components/ImagesLoader';
import { ImageUrls, SmallImageUrls } from './assets/images';
import useWindowSize from './hooks/useWindowSize';
import { BreakPoints } from './constants';
import FullScreenLoader from './components/UI/FullScreenLoader';

const App: FC = () => {
  const { width } = useWindowSize();
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  const [urls, setUrls] = useState<string[] | null>(null);

  useEffect(() => {
    if (width) {
      setUrls(
        width > BreakPoints.EXTRA_SMALL
          ? Object.values(ImageUrls)
          : Object.values(SmallImageUrls)
      );
    }
  }, [width]);

  return (
    <>
      <AnimatePresence>
        {!isImagesLoaded ? <FullScreenLoader /> : <Home key="home" />}
      </AnimatePresence>

      <ImagesLoader setIsImagesLoaded={setIsImagesLoaded} urls={urls} />
    </>
  );
};

export default App;
