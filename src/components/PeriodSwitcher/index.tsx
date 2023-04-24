import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { BreakPoints, Periods, TRANSITIONS } from '../../constants';
import { periodsData } from '../../data';
import { PeriodItemInterface } from '../../types';
import useWindowSize from '../../hooks/useWindowSize';
import './PeriodSwitcher.scss';

interface PeriodSwitcherProps {
  isFirstAppear: boolean;
  isCountry: boolean;
  prevPeriod: Periods | null;
  activePeriodName: string;
  handlePeriodChange: (period: PeriodItemInterface) => void;
}

const PeriodSwitcher: FC<PeriodSwitcherProps> = ({
  isFirstAppear,
  isCountry,
  prevPeriod,
  activePeriodName,
  handlePeriodChange,
}) => {
  const { width } = useWindowSize();

  const getNoCountryLeftPositionAnimate = (period: Periods) => {
    // TODO: find way to reuse scss variables for screen width (problem with Vite)
    if (activePeriodName === period) {
      if (width > BreakPoints.SMALL) {
        return '12vw';
      }

      if (width > BreakPoints.EXTRA_SMALL) {
        return '8vw';
      }

      return '4vw';
    }

    if (period === Periods.Viking) {
      return width > 450 ? '-60vw' : '-71vw';
    }

    return '85vw';
  };

  const getMoveUpAnimateVariant = () => {
    // TODO: find way to reuse scss variables for screen width (problem with Vite)
    if (width > BreakPoints.MEDIUM) {
      return {
        left: '14vw',
        bottom: 'unset',
        top: '14vh',
        fontSize: '36px',
      };
    }

    if (width > BreakPoints.SMALL) {
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
    firstAppearAnimate: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
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
    if (isCountry) {
      if (activePeriodName === period) {
        return 'moveUpAnimate';
      }
      return 'moveSideAnimate';
    }

    if (prevPeriod) {
      return 'noCountryAnimate';
    }

    return 'firstAppearAnimate';
  };

  return (
    <div>
      {Object.values(Periods).map((period) => (
        <m.h2
          key={period}
          variants={variants}
          custom={period}
          initial={{ opacity: isFirstAppear ? 0 : 1 }}
          animate={getAnimateVariant(period)}
          transition={{
            duration: TRANSITIONS.DURATION.slide,
          }}
          className={clsx('period-switcher', {
            active: activePeriodName === period,
            disabled: isFirstAppear,
            right: period === Periods.Assimilation,
          })}
          onClick={() => handlePeriodChange(periodsData[period])}
        >
          {period}
        </m.h2>
      ))}
    </div>
  );
};

export default PeriodSwitcher;
