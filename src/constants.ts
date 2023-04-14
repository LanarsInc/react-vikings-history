export enum Periods {
  Viking = 'Viking age',
  Assimilation = 'Assimilation',
}

export enum Countries {
  Norway = 'Norway',
  Sweden = 'Sweden',
  Denmark = 'Denmark',
  Norden = 'Norden',
}

export enum Subjects {
  History = 'History',
  Culture = 'Culture',
}

export const MENU_TIMEOUT_DELAY = 400;

export const TRANSITIONS = {
  DURATION: {
    slide: 1,
    backgroundColor: 1,
  },
  DELAY: {
    slide: 0.5,
    backgroundColor: 0.5,
  },
  EASE: {
    slide: [0.25, 0.1, 0.25, 1],
  },
};
