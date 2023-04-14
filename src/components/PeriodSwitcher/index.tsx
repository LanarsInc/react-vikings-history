import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { Periods, TRANSITIONS } from '../../constants';
import { periodsData } from '../../data';
import { PeriodItemInterface } from '../../types';
import useWindowSize from '../../hooks/useWindowSize';
import './PeriodSwitcher.scss';

interface PeriodSwitcherProps {
  isCountry: boolean;
  activePeriodName: string;
  handlePeriodChange: (period: PeriodItemInterface) => void;
}

const PeriodSwitcher: FC<PeriodSwitcherProps> = ({
  activePeriodName,
  isCountry,
  handlePeriodChange,
}) => {
  const { width } = useWindowSize();

  const getNoCountryLeftPositionAnimate = (period: Periods) => {
    if (activePeriodName === period) {
      return period === Periods.Viking ? '12vw' : '12vw';
    }

    if (period === Periods.Viking) {
      return '-60vw';
    }

    return '82vw';
  };

  const getMoveUpAnimateVariant = () => {
    // TODO: find way to reuse scss variables for screen width
    if (width > 992) {
      return {
        left: '14vw',
        bottom: 'unset',
        top: '14vh',
        fontSize: '36px',
      };
    }

    if (width > 600) {
      return {
        left: '8vw',
        bottom: 'unset',
        top: '14vh',
        fontSize: '30px',
      };
    }

    return {
      left: '4vw',
      bottom: 'unset',
      top: '24vh',
      fontSize: '20px',
    };
  };

  const variants = {
    noCountryAnimate: (period: Periods) => ({
      left: getNoCountryLeftPositionAnimate(period),
      transition: { delay: 0.5, duration: TRANSITIONS.DURATION.slide },
    }),
    moveUpAnimate: getMoveUpAnimateVariant(),
    moveSideAnimate: (period: Periods) => ({
      left: period === Periods.Viking ? '-100vw' : '100vw',
      transition: { duration: 0.5 },
    }),
  };

  const getAnimateVariant = (period: Periods) => {
    if (!isCountry) {
      return 'noCountryAnimate';
    }

    if (activePeriodName === period) {
      return 'moveUpAnimate';
    }

    return 'moveSideAnimate';
  };

  return (
    <>
      {Object.values(Periods).map((period) => (
        <m.h2
          key={period}
          variants={variants}
          custom={period}
          animate={getAnimateVariant(period)}
          transition={{
            duration: TRANSITIONS.DURATION.slide,
          }}
          className={clsx('period-switcher', {
            active: activePeriodName === period,
            right: period === Periods.Assimilation,
          })}
          onClick={() => handlePeriodChange(periodsData[period])}
        >
          {period}
        </m.h2>
      ))}
    </>
  );
};

export default PeriodSwitcher;
