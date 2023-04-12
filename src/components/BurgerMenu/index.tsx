import React, { FC, useState, useEffect } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import clsx from 'clsx';
import { Countries } from '../../constants';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setMenuIsOpen: (state: boolean) => void;
  activeCountry: Countries | null;
  handleMenuItemClick: (country: Countries) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setMenuIsOpen,
  activeCountry,
  handleMenuItemClick,
}) => {
  const [isTransition, setIsTransition] = useState(isMenuOpen);

  useEffect(() => {
    setTimeout(
      () => {
        setIsTransition(isMenuOpen);
      },
      isMenuOpen ? 0 : 400
    );
  }, [isMenuOpen]);

  const buttonLineVariants = {
    topAnimate: {
      rotate: isTransition ? '45deg' : 0,
      translate: isTransition ? '2px -6px' : 0,
      backgroundColor: isTransition ? 'black' : 'white',
    },
    bottomAnimate: {
      rotate: isTransition ? '-45deg' : 0,
      translate: isTransition ? '2px 4px' : 0,
      backgroundColor: isTransition ? 'black' : 'white',
    },
  };

  return (
    <div className="burger-menu">
      <div
        className="burger-menu__button-wrapper"
        onClick={() => setMenuIsOpen(!isMenuOpen)}
      >
        <div className="burger-menu__button">
          {[0, 1].map((number) => (
            <m.div
              key={number}
              variants={buttonLineVariants}
              animate={number === 0 ? 'topAnimate' : 'bottomAnimate'}
              transition={{ duration: 0.3 }}
              className="burger-menu__button-line"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <m.div
              key="menu"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5 }}
              className="burger-menu__content"
            />

            <ul className="burger-menu__list">
              {Object.values(Countries).map((country, index, countryArray) => (
                <m.li
                  key={country}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.15 + index / 10 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      delay: (countryArray.length - 1) / 10 - index / 10 - 0.2,
                    },
                  }}
                  className={clsx('burger-menu__list-item', {
                    active: country === activeCountry,
                  })}
                  onClick={() => handleMenuItemClick(country)}
                >
                  <span
                    className={clsx('burger-menu__list-item-text', {
                      active: country === activeCountry,
                    })}
                  >
                    {country}
                  </span>
                </m.li>
              ))}
            </ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
