import React, { FC } from 'react';
import { motion as m } from 'framer-motion';
import clsx from 'clsx';
import { Subjects } from '../../constants';
import './SubjectSwitcher.scss';

interface SubjectSwitcherProps {
  activeSubject: Subjects;
  handleSubjectChange: (period: Subjects) => void;
}

const SubjectSwitcher: FC<SubjectSwitcherProps> = ({
  activeSubject,
  handleSubjectChange,
}) => {
  const getPositionXAnimate = (subject: Subjects) => {
    if (subject === Subjects.History) {
      return activeSubject === subject ? 0 : '-50%';
    }

    if (activeSubject === subject) {
      return '-50%';
    }

    return 0;
  };

  return (
    <>
      {Object.values(Subjects).map((subject) => (
        <m.h3
          key={subject}
          initial={{
            x: '250%',
            opacity: 0,
          }}
          animate={{
            x: getPositionXAnimate(subject),
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          exit={{
            x: '250%',
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          className={clsx('subject-switcher', {
            active: subject === activeSubject,
            culture: subject === Subjects.Culture,
          })}
          onClick={() => handleSubjectChange(subject)}
        >
          {subject}
        </m.h3>
      ))}
    </>
  );
};

export default SubjectSwitcher;
