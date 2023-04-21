import React, { FC } from 'react';
import { motion as m, Variants } from 'framer-motion';
import { InfoItemInterface } from '../../types';
import './InfoItem.scss';

export interface InfoItemPropsInterface extends InfoItemInterface {
  variants: Variants;
}

const InfoItem: FC<InfoItemPropsInterface> = ({
  variants,
  primaryColor,
  secondaryColor,
  imagePath,
  textBlocks,
}) => {
  return (
    <m.section
      variants={variants}
      initial="mainInitial"
      animate="mainAnimate"
      exit="mainExit"
      className="info-item"
      style={{
        backgroundColor: primaryColor,
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div className="info-item__content">
        <m.div
          variants={variants}
          initial="contentBgInitial"
          animate="contentBgAnimate"
          exit="contentBgExit"
          className="info-item__content-bg"
          style={{
            backgroundColor: secondaryColor,
            backgroundImage: `url(${imagePath})`,
          }}
        />
      </div>

      <article className="info-item__article">
        {Object.keys(textBlocks).map((position) => (
          <m.div
            key={position}
            variants={variants}
            custom={position === 'left' ? 1 : 1.1}
            initial="textInitial"
            animate="textAnimate"
            exit="textExit"
            className="info-item__text-block"
          >
            {textBlocks[position as keyof typeof textBlocks].map((text) => (
              <p key={text} className="info-item__text">
                {text}
              </p>
            ))}
          </m.div>
        ))}
      </article>
    </m.section>
  );
};

export default InfoItem;
