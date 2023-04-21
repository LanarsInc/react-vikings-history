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
export const SHIFT_DELAY = 0.02;

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
    slide: 'easeOut',
  },
};

export enum BreakPoints {
  EXTRA_SMALL = 450,
  SMALL = 750,
  MEDIUM = 1050,
  LARGE = 1350,
}
