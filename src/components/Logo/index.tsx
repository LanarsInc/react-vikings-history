import React, { FC, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { ReactComponent as LogoWhiteIcon } from '../../assets/icons/Logo/logo-white.svg';
import { ReactComponent as LogoBlackIcon } from '../../assets/icons/Logo/logo-black.svg';
import './Logo.scss';

interface LogoProps {
  isMenuOpen: boolean;
}

const Logo: FC<LogoProps> = ({ isMenuOpen }) => {
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        setIsTransition(isMenuOpen);
      },
      isMenuOpen ? 0 : 400
    );
  }, [isMenuOpen]);

  return (
    <m.div
      initial={{ color: 'white' }}
      animate={{ color: isTransition ? 'black' : 'white' }}
      transition={{ duration: 0.5 }}
      className="logo"
    >
      {isTransition ? (
        <LogoBlackIcon className="logo__icon" />
      ) : (
        <LogoWhiteIcon className="logo__icon" />
      )}
      <p className="logo__subtitle">Historical overview</p>
    </m.div>
  );
};

export default Logo;
