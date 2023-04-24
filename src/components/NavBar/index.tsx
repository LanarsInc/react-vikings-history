import React, { FC, useState } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { Countries, TRANSITIONS } from '../../constants';
import './NavBar.scss';

interface NavBarProps {
  activeCountry: Countries | null;
  handleCountryChange: (country: Countries) => void;
}

const NavBar: FC<NavBarProps> = ({ activeCountry, handleCountryChange }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const onCountryClick = (selectedCountry: Countries) => {
    setIsDisabled(true);
    handleCountryChange(selectedCountry);
    setTimeout(() => {
      setIsDisabled(false);
    }, (TRANSITIONS.DURATION.slide + TRANSITIONS.DELAY.slide) * 1000);
  };

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  return (
    <m.nav
      variants={variants}
      initial="initial"
      animate="animate"
      className="nav-bar"
    >
      <ul className="nav-bar__list">
        {Object.values(Countries).map((country) => (
          <li
            key={country}
            className={clsx('nav-bar__list-item', {
              active: activeCountry === country,
              disabled: isDisabled,
            })}
            onClick={() => onCountryClick(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    </m.nav>
  );
};

export default NavBar;
