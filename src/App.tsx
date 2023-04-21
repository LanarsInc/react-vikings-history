import React, { FC, useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import Home from './pages/Home';
import ImagesLoader from './components/ImagesLoader';
import useWindowSize from './hooks/useWindowSize';
import { BreakPoints } from './constants';
import { ImageUrls, SmallImageUrls } from './assets/images';
import Loader from './components/UI/Loader';

const App: FC = () => {
  const { width } = useWindowSize();
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isImagesLoaded ? (
          <m.div
            key="loader-wrapper"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="loader-wrapper"
          >
            <Loader />
          </m.div>
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>

      <ImagesLoader
        setIsImagesLoaded={setIsImagesLoaded}
        urls={
          width > BreakPoints.SMALL
            ? Object.values(ImageUrls)
            : Object.values(SmallImageUrls)
        }
      />
    </>
  );
};

export default App;
