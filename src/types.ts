import { Countries, Periods, Subjects } from './constants';

export interface PeriodItemInterface {
  name: Periods;
  primaryColor: string;
  secondaryColor: string;
  imagePath: string;
  quotationText: string;
  quotationAuthor: string;
}

export type PeriodsDataInterface = {
  [Key in Periods]: PeriodItemInterface;
};

export interface InfoItemInterface {
  primaryColor: string;
  secondaryColor: string;
  imagePath: string;
  textBlocks: {
    left: string[];
    right: string[];
  };
}

type CountryDataInterface = {
  [Key in Countries]: InfoItemInterface;
};

type SubjectDataInterface = {
  [Key in Subjects]: CountryDataInterface;
};

export type DataInterface = {
  [Key in Periods]: SubjectDataInterface;
};
