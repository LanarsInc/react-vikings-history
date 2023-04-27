import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import { SHIFT_DELAY, TRANSITIONS } from '../../constants';
import './PeriodItem.scss';

interface PeriodItemProps {
  isFirstAppear: boolean;
  isLeftSection: boolean;
  isCountry: boolean;
  periodAnimateX: string;
  nextColors: {
    primaryColor: string;
    secondaryColor: string;
  };
  primaryColor: string;
  secondaryColor: string;
  imagePath: string;
  imagePathSmall: string;
  quotationText: string;
  quotationAuthor: string;
}

const PeriodItem: FC<PeriodItemProps> = ({
  isFirstAppear,
  isLeftSection,
  periodAnimateX,
  nextColors,
  isCountry,
  primaryColor,
  secondaryColor,
  imagePath,
  imagePathSmall,
  quotationText,
  quotationAuthor,
}) => {
  const isSlideAfterCountry = periodAnimateX === '-100%';

  const variants = {
    mainInitial: {
      x: isLeftSection ? '-100%' : periodAnimateX,
    },
    mainAnimated: {
      x: 0,
      transition: {
        x: {
          ease: TRANSITIONS.EASE.slide,
          delay: isSlideAfterCountry
            ? 0.2
            : TRANSITIONS.DELAY.slide - SHIFT_DELAY,
          duration: TRANSITIONS.DURATION.slide,
        },
      },
    },
    mainExit: {
      x: isLeftSection || isCountry ? '-100%' : '100%',
      backgroundColor: nextColors.primaryColor,
      transition: {
        x: {
          ease: TRANSITIONS.EASE.slide,
          delay: isCountry ? SHIFT_DELAY : TRANSITIONS.DELAY.slide,
          duration: TRANSITIONS.DURATION.slide,
        },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    contentInitial: {
      width: isLeftSection ? '85vw' : '100vw',
    },
    contentAnimated: {
      clipPath: isLeftSection ? 'inset(0 0 0 0)' : 'inset(0 0 0 15%)',
      transition: {
        delay: isSlideAfterCountry ? 0 : 1,
        duration: isSlideAfterCountry ? 0 : 0.5,
      },
    },
    contentBgInitial: {
      clipPath: isLeftSection ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
    },
    contentBgAnimated: {
      backgroundPosition: !isLeftSection ? '0 0' : '-15vw 0vw',
      clipPath: 'inset(0 0 0 0)',
      transition: {
        clipPath: {
          delay: isSlideAfterCountry || isFirstAppear ? 0.2 : 0.5,
          duration: 1,
        },
      },
    },
    contentBgExit: {
      clipPath:
        !isCountry && !isLeftSection
          ? 'inset(0 100% 0 0)'
          : 'inset(0 0 0 100%)',
      backgroundColor: nextColors.secondaryColor,
      transition: {
        clipPath: {
          duration: isSlideAfterCountry ? 1 : 1.5,
        },
        backgroundColor: {
          delay: isCountry ? 0 : TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    quotationInitial: {
      x: '-100%',
      opacity: 0,
    },
    quotationAnimated: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: isSlideAfterCountry || isFirstAppear ? 0.5 : 1,
      },
    },
    quotationExit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <m.section
      variants={variants}
      initial={isFirstAppear ? undefined : 'mainInitial'}
      animate="mainAnimated"
      exit="mainExit"
      className="period-item"
      style={{
        backgroundColor: primaryColor,
        backgroundImage: `-webkit-image-set(
          url(${imagePathSmall}) 1x,
          url(${imagePath}) 2x)`,
      }}
    >
      {/* For optimization purpose */}
      <img
        srcSet={`${imagePathSmall}, ${imagePath}`}
        loading="lazy"
        style={{ display: 'none' }}
        alt="img"
      />
      <m.div
        variants={variants}
        initial="contentInitial"
        animate="contentAnimated"
        className="period-item__content"
      >
        <m.div
          variants={variants}
          initial="contentBgInitial"
          animate="contentBgAnimated"
          exit="contentBgExit"
          className="period-item__content-bg"
          style={{
            backgroundColor: secondaryColor,
            backgroundImage: `-webkit-image-set(
              url(${imagePathSmall}) 1x,
              url(${imagePath}) 2x)`,
          }}
        />
      </m.div>
      <m.blockquote
        key={quotationText}
        variants={variants}
        initial="quotationInitial"
        animate="quotationAnimated"
        exit="quotationExit"
        className="period-item__quotation"
      >
        <p className="period-item__quotation-text">
          {quotationText}
        </p>
        <p className="period-item__quotation-author">{quotationAuthor}</p>
      </m.blockquote>
    </m.section>
  );
};

export default PeriodItem;
