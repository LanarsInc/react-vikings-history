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
  setIsMainImageLoaded: (state: boolean) => void;
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
  setIsMainImageLoaded,
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
          delay: isCountry ? 0.2 : TRANSITIONS.DELAY.backgroundColor,
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
        delay: isSlideAfterCountry ? 0 : 0.9,
        duration: isSlideAfterCountry ? 0 : 1.3,
      },
    },
    contentBgInitial: {
      clipPath:
        isSlideAfterCountry || isLeftSection
          ? 'inset(0 0 0 100%)'
          : 'inset(0 0 0 0)',
    },
    contentBgAnimated: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        clipPath: {
          ease: TRANSITIONS.EASE.slide,
          delay: isSlideAfterCountry || isFirstAppear ? 0.2 : 0.5,
          duration: 1.1,
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
          ease: TRANSITIONS.EASE.slide,
          duration: isSlideAfterCountry ? 1 : 0.95,
        },
        backgroundColor: {
          delay: isCountry ? 0.2 : TRANSITIONS.DELAY.backgroundColor,
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
        delay: isFirstAppear ? 0.5 : 1,
      },
    },
    quotationExit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <m.section
      variants={variants}
      initial={isFirstAppear ? undefined : 'mainInitial'}
      animate="mainAnimated"
      exit="mainExit"
      className="period-item"
      style={{ backgroundColor: primaryColor }}
    >
      <img
        srcSet={`${imagePathSmall}, ${imagePath} 2x`}
        src={imagePath}
        onLoad={() => setIsMainImageLoaded(true)}
        className="period-item__image"
        alt="vikings period img"
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
          style={{ backgroundColor: secondaryColor }}
        >
          <img
            srcSet={`${imagePathSmall}, ${imagePath} 2x`}
            src={imagePath}
            className="period-item__image"
            alt="vikings period img"
          />
        </m.div>
      </m.div>
      <m.blockquote
        key={quotationText}
        variants={variants}
        initial="quotationInitial"
        animate="quotationAnimated"
        exit="quotationExit"
        className="period-item__quotation"
      >
        <p className="period-item__quotation-text">{quotationText}</p>
        <p className="period-item__quotation-author">{quotationAuthor}</p>
      </m.blockquote>
    </m.section>
  );
};

export default PeriodItem;
