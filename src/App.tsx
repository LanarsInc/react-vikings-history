import React, { FC, useEffect, useState } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';
import Logo from './components/Logo';
import Arrow from './components/Arrow';
import NavBar from './components/NavBar';
import BurgerMenu from './components/BurgerMenu';
import PeriodSwitcher from './components/PeriodSwitcher';
import SubjectSwitcher from './components/SubjectSwitcher';
import PeriodItem from './pages/PeriodItem';
import InfoItem from './pages/InfoItem';
import { Countries, MENU_TIMEOUT_DELAY, Periods, Subjects } from './constants';
import { data, periodsData } from './data';
import { InfoItemInterface, PeriodItemInterface } from './types';
import useInfoAnimationVariables from './hooks/useInfoAnimationVariables';

const App: FC = () => {
  const [period, setPeriod] = useState(periodsData[Periods.Viking]);
  const [subject, setSubject] = useState(Subjects.History);
  const [country, setCountry] = useState<Countries | null>(null);
  const [currentInfo, setCurrentInfo] = useState<InfoItemInterface | null>(
    null
  );
  const [periodAnimateX, setPeriodAnimateX] = useState('100%');
  const [periodPageNextColors, setPeriodPageNextColors] = useState<{
    primaryColor: string;
    secondaryColor: string;
  }>({
    primaryColor: periodsData[Periods.Assimilation].primaryColor,
    secondaryColor: periodsData[Periods.Assimilation].secondaryColor,
  });

  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const [
    infoAnimationVariablesSlideFromRight,
    infoAnimationVariablesSlideFromLeft,
    infoAnimationVariablesSlideFromTop,
  ] = useInfoAnimationVariables(period.name);

  const [infoAnimationVariant, setInfoAnimationVariant] = useState<Variants>(
    infoAnimationVariablesSlideFromRight
  );

  useEffect(() => {
    if (country) {
      setCurrentInfo(data[period.name]?.[subject]?.[country]);
    } else {
      setCurrentInfo(null);
    }
  }, [period.name, subject, country]);

  const handleCountryChange = (selectedCountry: Countries) => {
    if (country) {
      if (country === selectedCountry) {
        setInfoAnimationVariant(infoAnimationVariablesSlideFromRight);
        setCountry(null);
        setPeriodAnimateX('-100%');
      } else {
        setCountry(selectedCountry);
        setInfoAnimationVariant({
          ...infoAnimationVariablesSlideFromLeft,
          mainExit: {
            ...infoAnimationVariablesSlideFromLeft.mainExit,
            backgroundColor:
              data[period.name][subject][selectedCountry].primaryColor,
          },
          contentBgExit: {
            ...infoAnimationVariablesSlideFromLeft.contentBgExit,
            backgroundColor:
              data[period.name][subject][selectedCountry].secondaryColor,
          },
        });
      }
    } else {
      setCountry(selectedCountry);
      setPeriodAnimateX('100%');
      setPeriodPageNextColors({
        primaryColor: data[period.name][subject][selectedCountry].primaryColor,
        secondaryColor:
          data[period.name][subject][selectedCountry].secondaryColor,
      });
    }
  };

  const handleSubjectChange = (newSubject: Subjects) => {
    if (country) {
      setSubject(newSubject);
      setInfoAnimationVariant({
        ...infoAnimationVariablesSlideFromTop,
        mainExit: {
          ...infoAnimationVariablesSlideFromTop.mainExit,
          backgroundColor: data[period.name][newSubject][country].primaryColor,
        },
        contentBgExit: {
          ...infoAnimationVariablesSlideFromTop.contentBgExit,
          backgroundColor:
            data[period.name][newSubject][country].secondaryColor,
        },
      });
    }
  };

  const handleMenuItemClick = (selectedCountry: Countries) => {
    handleCountryChange(selectedCountry);

    setTimeout(() => {
      setMenuIsOpen(false);
    }, MENU_TIMEOUT_DELAY);
  };

  const handlePeriodChange = (newPeriod: PeriodItemInterface) => {
    setPeriodAnimateX('100%');
    setPeriodPageNextColors({
      primaryColor: newPeriod.primaryColor,
      secondaryColor: newPeriod.secondaryColor,
    });

    if (period.name === newPeriod.name && country) {
      handleCountryChange(country);
    }

    setTimeout(() => {
      setPeriod(newPeriod);
    }, 0);
  };

  const handleArrowClick = () => {
    if (country) {
      handleSubjectChange(
        subject === Subjects.History ? Subjects.Culture : Subjects.History
      );
    } else {
      handlePeriodChange(
        periodsData[
          period.name === Periods.Viking ? Periods.Assimilation : Periods.Viking
        ]
      );
    }
  };

  return (
    <main className="home">
      <Logo isMenuOpen={isMenuOpen} />

      <BurgerMenu
        isMenuOpen={isMenuOpen}
        setMenuIsOpen={setMenuIsOpen}
        activeCountry={country}
        handleMenuItemClick={handleMenuItemClick}
      />

      <NavBar
        activeCountry={country}
        handleCountryChange={handleCountryChange}
      />

      <AnimatePresence initial={false}>
        <Arrow
          key={country ? subject : period.name}
          isLeftSection={
            country
              ? subject === Subjects.History
              : period.name === Periods.Viking
          }
          handleArrowClick={handleArrowClick}
        />
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {country && (
          <SubjectSwitcher
            activeSubject={subject}
            handleSubjectChange={handleSubjectChange}
          />
        )}
      </AnimatePresence>

      <PeriodSwitcher
        isCountry={!!country}
        activePeriodName={period.name}
        handlePeriodChange={handlePeriodChange}
      />

      <AnimatePresence initial={false}>
        {!currentInfo ? (
          <PeriodItem
            key={period.imagePath}
            isLeftSection={period.name === Periods.Viking}
            isCountry={!!country}
            periodAnimateX={periodAnimateX}
            nextColors={periodPageNextColors}
            primaryColor={period.primaryColor}
            secondaryColor={period.secondaryColor}
            imagePath={period.imagePath}
            quotationText={period.quotationText}
            quotationAuthor={period.quotationAuthor}
          />
        ) : (
          <InfoItem
            key={currentInfo.imagePath}
            variants={infoAnimationVariant}
            primaryColor={currentInfo.primaryColor}
            secondaryColor={currentInfo.secondaryColor}
            imagePath={currentInfo.imagePath}
            textBlocks={currentInfo.textBlocks}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
