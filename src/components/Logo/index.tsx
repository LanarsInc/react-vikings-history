import React, { FC, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { ReactComponent as LogoWhiteIcon } from '../../assets/icons/Logo/logo-white.svg';
import { ReactComponent as LogoBlackIcon } from '../../assets/icons/Logo/logo-black.svg';
import { MENU_TIMEOUT_DELAY } from '../../constants';
import './Logo.scss';

interface LogoProps {
  isMenuOpen: boolean;
  handleLogoClick: () => void;
}

const Logo: FC<LogoProps> = ({ isMenuOpen, handleLogoClick }) => {
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        setIsTransition(isMenuOpen);
      },
      isMenuOpen ? 0 : MENU_TIMEOUT_DELAY
    );
  }, [isMenuOpen]);

  return (
    <m.div
      initial={{ color: 'white' }}
      // TODO: find way to reuse scss color variables
      animate={{ color: isTransition ? '#040912' : '#ffff' }}
      transition={{ duration: 0.5 }}
      className="logo"
      onClick={handleLogoClick}
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
