import React, { FC, useState, useEffect } from 'react';

interface PeriodSwitcherProps {
  urls: string[];
  setIsImagesLoaded: (state: boolean) => void;
}

const ImagesLoader: FC<PeriodSwitcherProps> = ({ urls, setIsImagesLoaded }) => {
  const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);

  useEffect(() => {
    if (loadedImagesCounter >= urls.length) {
      setTimeout(() => {
        setIsImagesLoaded(true);
      }, 500);
    }
  }, [urls.length, loadedImagesCounter, setIsImagesLoaded]);

  const onComplete = () => {
    setLoadedImagesCounter((prevState) => prevState + 1);
  };

  return (
    <>
      {urls.map((url: string) => (
        <img
          key={url}
          src={url}
          onLoad={onComplete}
          onError={onComplete}
          style={{ display: 'none' }}
          alt="img"
        />
      ))}
    </>
  );
};

export default ImagesLoader;
