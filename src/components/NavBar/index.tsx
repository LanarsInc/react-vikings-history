import React, { FC, useState } from 'react';
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

  return (
    <nav className="nav-bar">
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
    </nav>
  );
};

export default NavBar;
