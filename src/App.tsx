import React, { FC, useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import Home from './pages/Home';
import ImagesLoader from './components/ImagesLoader';
import { images} from './assets/images';
import Loader from './components/UI/Loader';

const App: FC = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isImagesLoaded ? (
          <m.div
            key="loader-wrapper"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        urls={Object.values(images)}
      />
    </>
  );
};

export default App;
