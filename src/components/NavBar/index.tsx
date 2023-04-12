import React, { FC } from 'react';
import clsx from 'clsx';
import { Countries } from '../../constants';
import './NavBar.scss';

interface NavBarProps {
  activeCountry: Countries | null;
  handleCountryChange: (country: Countries) => void;
}

const NavBar: FC<NavBarProps> = ({ activeCountry, handleCountryChange }) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        {Object.values(Countries).map((country) => (
          <li
            key={country}
            className={clsx('nav-bar__list-item', {
              active: activeCountry === country,
            })}
            onClick={() => handleCountryChange(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
