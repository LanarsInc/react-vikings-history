import { Periods, TRANSITIONS } from '../constants';
import { periodsData } from '../data';

function useInfoAnimationVariables(activePeriodName: Periods) {
  const slideTransition = {
    ease: TRANSITIONS.EASE.slide,
    delay: TRANSITIONS.DELAY.slide,
    duration: TRANSITIONS.DURATION.slide,
  };

  const backgroundColorTransition = {
    delay: TRANSITIONS.DELAY.backgroundColor,
    duration: TRANSITIONS.DURATION.backgroundColor,
  };

  const infoAnimationVariablesSlideFromRight = {
    mainInitial: { x: '100%' },
    mainAnimate: {
      x: 0,
      transition: {
        x: slideTransition,
      },
    },
    mainExit: {
      x: '100%',
      backgroundColor: periodsData[activePeriodName].primaryColor,
      transition: {
        x: slideTransition,
        backgroundColor: backgroundColorTransition,
      },
    },
    contentBgExit: {
      backgroundColor: periodsData[activePeriodName].secondaryColor,
      transition: {
        backgroundColor: backgroundColorTransition,
      },
    },
    textInitial: {
      x: '-100%',
      opacity: 0,
    },
    textAnimate: (delay: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 100,
      },
    }),
    textExit: (delay: number) => ({
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.3,
        delay: Math.abs(delay - 1.1),
      },
    }),
  };

  const infoAnimationVariablesSlideFromLeft = {
    mainInitial: { x: '-100%' },
    mainAnimate: {
      x: 0,
      transition: {
        x: slideTransition,
      },
    },
    mainExit: {
      x: '100%',
      transition: {
        x: slideTransition,
        backgroundColor: backgroundColorTransition,
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 100% 0 0)',
      transition: {
        backgroundColor: backgroundColorTransition,
        clipPath: {
          duration: 0.5,
        },
      },
    },
    textInitial: {
      x: '-100%',
      opacity: 0,
    },
    textAnimate: (delay: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 100,
      },
    }),
    textExit: (delay: number) => ({
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: Math.abs(delay - 1.1),
      },
    }),
  };

  const infoAnimationVariablesSlideFromTop = {
    mainInitial: { y: '-100%' },
    mainAnimate: {
      y: 0,
      transition: {
        y: slideTransition,
      },
    },
    mainExit: {
      y: '100%',
      transition: {
        y: slideTransition,
        backgroundColor: backgroundColorTransition,
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        backgroundColor: backgroundColorTransition,
        clipPath: {
          duration: 0.5,
        },
      },
    },
    textInitial: {
      y: '-100%',
      opacity: 0,
    },
    textAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        type: 'spring',
        stiffness: 100,
      },
    },
    textExit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return [
    infoAnimationVariablesSlideFromRight,
    infoAnimationVariablesSlideFromLeft,
    infoAnimationVariablesSlideFromTop,
  ];
}

export default useInfoAnimationVariables;
