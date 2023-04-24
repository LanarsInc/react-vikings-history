import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import { ReactComponent as WheelIcon } from '../../../assets/icons/wheel.svg';
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
        className="full-screen-loader__svg-wrapper"
      >
        <WheelIcon className="full-screen-loader__svg" />
      </m.div>
    </m.div>
  );
};

export default FullScreenLoader;
