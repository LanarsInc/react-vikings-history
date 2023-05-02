import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import { SHIFT_DELAY, TRANSITIONS } from '../../constants';
import ProgressiveImg from '../../components/ProgressiveImg';
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
  imagePathPlaceholder: string;
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
  imagePathPlaceholder,
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
        duration: isSlideAfterCountry ? 0 : 0.8,
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
      className="page"
      style={{ backgroundColor: primaryColor }}
    >
      <ProgressiveImg
        placeholderSrc={imagePathPlaceholder}
        src={imagePath}
        alt="vikings period img"
        setIsMainImageLoaded={setIsMainImageLoaded}
      />
      <m.div
        variants={variants}
        initial="contentInitial"
        animate="contentAnimated"
        className="page__content right"
      >
        <m.div
          variants={variants}
          initial="contentBgInitial"
          animate="contentBgAnimated"
          exit="contentBgExit"
          className="page__content-bg right"
          style={{ backgroundColor: secondaryColor }}
        >
          <ProgressiveImg
            placeholderSrc={imagePathPlaceholder}
            src={imagePath}
            alt="vikings period img"
            setIsMainImageLoaded={setIsMainImageLoaded}
          />
        </m.div>
      </m.div>
      <m.blockquote
        key={quotationText}
        variants={variants}
        initial="quotationInitial"
        animate="quotationAnimated"
        exit="quotationExit"
        className="page__quotation"
      >
        <p className="page__quotation-text">{quotationText}</p>
        <p className="page__quotation-author">{quotationAuthor}</p>
      </m.blockquote>
    </m.section>
  );
};

export default PeriodItem;
