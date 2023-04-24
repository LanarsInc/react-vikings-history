import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import WheelImage from '../../../assets/images/wheel.webp';
import './FullScreenLoader.scss';

const FullScreenLoader: FC = () => {
  return (
    <m.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="full-screen-loader"
    >
      <m.div
        animate={{
          scale: [1, 1.5, 1, 1.5, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="full-screen-loader__image-wrapper"
      >
        <img
          className="full-screen-loader__image"
          src={WheelImage}
          alt="helmet"
        />
      </m.div>
    </m.div>
  );
};

export default FullScreenLoader;
