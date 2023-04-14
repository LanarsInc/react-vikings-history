import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import { TRANSITIONS } from '../../constants';
import './PeriodItem.scss';

interface PeriodItemProps {
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
  quotationText: string;
  quotationAuthor: string;
}

const PeriodItem: FC<PeriodItemProps> = ({
  isLeftSection,
  periodAnimateX,
  nextColors,
  isCountry,
  primaryColor,
  secondaryColor,
  imagePath,
  quotationText,
  quotationAuthor,
}) => {
  const variants = {
    mainInitial: {
      x: isLeftSection ? '-100%' : periodAnimateX,
    },
    mainAnimated: {
      x: 0,
      transition: {
        x: {
          ease: TRANSITIONS.EASE.slide,
          delay: TRANSITIONS.DELAY.slide,
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
          delay: TRANSITIONS.DELAY.slide + 0.02,
          duration: TRANSITIONS.DURATION.slide,
        },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    contentInitial: {
      left: 0,
    },
    contentAnimated: {
      left: 'unset',
      right: 0,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
    contentBgInitial: {
      backgroundPosition: 0,
    },
    contentBgAnimated: {
      backgroundPosition: '-15vw 0vw',
      transition: { delay: 1, duration: 0.5 },
    },
    contentBgExit: {
      clipPath: !isCountry ? 'inset(0 0 0 100%)' : undefined,
      backgroundColor: nextColors.secondaryColor,
      transition: {
        clipPath: { duration: 1 },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    quotationInitial: {
      x: '-100%',
      opacity: 0,
    },
    quotationAnimated: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        type: 'spring',
        stiffness: 100,
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
      initial="mainInitial"
      animate="mainAnimated"
      exit="mainExit"
      className="period-item"
      style={{
        backgroundColor: primaryColor,
        backgroundImage: `url(${imagePath})`,
      }}
    >
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
            backgroundImage: `url(${imagePath})`,
          }}
        />
      </m.div>
      <m.blockquote
        variants={variants}
        initial="quotationInitial"
        animate="quotationAnimated"
        exit="quotationExit"
        className="period-item__quotation"
      >
        <p className="period-item__quotation-text">
          &quot; {quotationText} &quot;
        </p>
        <h4 className="period-item__quotation-author">{quotationAuthor}</h4>
      </m.blockquote>
    </m.section>
  );
};

export default PeriodItem;
