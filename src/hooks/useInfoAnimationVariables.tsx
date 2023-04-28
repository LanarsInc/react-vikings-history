import { Periods, SHIFT_DELAY, TRANSITIONS } from '../constants';
import { periodsData } from '../data';

function useInfoAnimationVariables(activePeriodName: Periods) {
  const getSlideTransition = (
    shiftDelay = 0,
    delay = TRANSITIONS.DELAY.slide
  ) => {
    return {
      ease: TRANSITIONS.EASE.slide,
      delay: delay + shiftDelay,
      duration: TRANSITIONS.DURATION.slide,
    };
  };

  const getBackgroundColorTransition = (
    delay: number = TRANSITIONS.DELAY.backgroundColor
  ) => {
    return {
      delay,
      duration: TRANSITIONS.DURATION.backgroundColor,
    };
  };

  const infoAnimationVariablesSlideFromRight = {
    mainInitial: { x: '100%' },
    mainAnimate: {
      x: 0,
      transition: {
        x: getSlideTransition(0, 0),
      },
    },
    mainExit: {
      x: '100%',
      backgroundColor: periodsData[activePeriodName].primaryColor,
      transition: {
        x: getSlideTransition(SHIFT_DELAY, 0.2),
        backgroundColor: getBackgroundColorTransition(0.2),
      },
    },
    contentBgInitial: {
      clipPath: 'inset(0 100% 0 0)',
    },
    contentBgAnimate: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        delay: 0.2,
        duration: 1.1,
        ease: TRANSITIONS.EASE.slide,
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 100% 0 0)',
      backgroundColor: periodsData[activePeriodName].secondaryColor,
      transition: {
        clipPath: {
          delay: 0,
          duration: 1,
          ease: TRANSITIONS.EASE.slide,
        },
        backgroundColor: getBackgroundColorTransition(0.2),
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
        delay: delay - 0.4,
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
        x: getSlideTransition(),
      },
    },
    mainExit: {
      x: '100%',
      transition: {
        x: getSlideTransition(SHIFT_DELAY),
        backgroundColor: getBackgroundColorTransition(),
      },
    },
    contentBgInitial: {
      clipPath: 'inset(0 100% 0 0)',
    },
    contentBgAnimate: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        ease: TRANSITIONS.EASE.slide,
        delay: 0.5,
        duration: TRANSITIONS.DURATION.slide,
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 100% 0 0)',
      transition: {
        backgroundColor: getBackgroundColorTransition(),
        clipPath: {
          ease: TRANSITIONS.EASE.slide,
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
        y: getSlideTransition(),
      },
    },
    mainExit: {
      y: '100%',
      transition: {
        y: getSlideTransition(SHIFT_DELAY),
        backgroundColor: getBackgroundColorTransition(),
      },
    },
    contentBgInitial: {
      clipPath: 'inset(0 0 100% 0)',
    },
    contentBgAnimate: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        ease: TRANSITIONS.EASE.slide,
        delay: 0.5,
        duration: TRANSITIONS.DURATION.slide,
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        backgroundColor: getBackgroundColorTransition(),
        clipPath: {
          ease: TRANSITIONS.EASE.slide,
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
