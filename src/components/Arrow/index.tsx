import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import './Arrow.scss';

interface ArrowProps {
  isLeftSection: boolean;
  handleArrowClick: () => void;
}

const Arrow: FC<ArrowProps> = ({ handleArrowClick, isLeftSection }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
        transform: isLeftSection ? 'scaleX(1)' : 'scaleX(-1)',
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={clsx('arrow', {
        left: !isLeftSection,
      })}
      onClick={handleArrowClick}
    >
      <ArrowIcon className="arrow__icon" />
    </m.div>
  );
};

export default Arrow;
