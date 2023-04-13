import { Periods, TRANSITIONS } from '../constants';
import { periodsData } from '../data';

export const useInfoAnimationVariables = (activePeriodName: Periods) => {
  const infoAnimationVariablesSlideFromRight = {
    mainInitial: {
      x: '100%',
    },
    mainAnimate: {
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
      x: '100%',
      backgroundColor: periodsData[activePeriodName].primaryColor,
      transition: {
        x: {
          ease: TRANSITIONS.EASE.slide,
          delay: TRANSITIONS.DELAY.slide,
          duration: TRANSITIONS.DURATION.slide,
        },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    contentBgExit: {
      backgroundColor: periodsData[activePeriodName].secondaryColor,
      transition: {
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
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
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.3,
        delay: Math.abs(delay - 1.1),
      },
    }),
  };

  const infoAnimationVariablesSlideFromLeft = {
    mainInitial: {
      x: '-100%',
    },
    mainAnimate: {
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
      x: '100%',
      transition: {
        x: {
          ease: TRANSITIONS.EASE.slide,
          delay: TRANSITIONS.DELAY.slide,
          duration: TRANSITIONS.DURATION.slide,
        },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 100% 0 0)',
      transition: {
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
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
    mainInitial: {
      y: '-100%',
    },
    mainAnimate: {
      y: 0,
      transition: {
        y: {
          ease: TRANSITIONS.EASE.slide,
          delay: TRANSITIONS.DELAY.slide,
          duration: TRANSITIONS.DURATION.slide,
        },
      },
    },
    mainExit: {
      y: '100%',
      transition: {
        y: {
          ease: TRANSITIONS.EASE.slide,
          delay: TRANSITIONS.DELAY.slide,
          duration: TRANSITIONS.DURATION.slide,
        },
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
      },
    },
    contentBgExit: {
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        backgroundColor: {
          delay: TRANSITIONS.DELAY.backgroundColor,
          duration: TRANSITIONS.DURATION.backgroundColor,
        },
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
};
