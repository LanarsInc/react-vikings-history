import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { ReactComponent as WaveIcon } from '../../../assets/icons/wave.svg';
import { ReactComponent as ShipIcon } from '../../../assets/icons/ship.svg';
import './FullScreenLoader.scss';

const FullScreenLoader: FC = () => {
  return (
    <m.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="full-screen-loader"
    >
      <div className="full-screen-loader__content">
        <m.div
          animate={{
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="full-screen-loader__ship-container"
        >
          <ShipIcon className="full-screen-loader__ship" />
          {['left', 'right'].map((paddlePosition) => {
            return (
              <m.div
                key={paddlePosition}
                animate={{
                  height: [45, 45, 45, 45, 30, 25, 10, 10, 45, 45],
                  rotate: [-65, -45, 0, 45, 65, 85, 45, -65, -85, -65],
                  transformOrigin: 'top',
                }}
                transition={{
                  duration: 1,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className={clsx('full-screen-loader__paddle', {
                  [paddlePosition]: true,
                })}
              />
            );
          })}
        </m.div>

        <m.div
          animate={{
            translateX: [-1, -103],
          }}
          transition={{
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="full-screen-loader__wave-container"
        >
          <WaveIcon className="full-screen-loader__wave" />
        </m.div>
      </div>
    </m.div>
  );
};

export default FullScreenLoader;
