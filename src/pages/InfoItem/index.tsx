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
  imagePathSmall,
  textBlocks,
}) => {
  return (
    <m.section
      variants={variants}
      initial="mainInitial"
      animate="mainAnimate"
      exit="mainExit"
      className="page"
      style={{ backgroundColor: primaryColor }}
    >
      <img
        srcSet={`${imagePathSmall}, ${imagePath} 2x`}
        src={imagePath}
        className="image"
        alt="vikings info img"
      />
      <div className="page__content">
        <m.div
          variants={variants}
          initial="contentBgInitial"
          animate="contentBgAnimate"
          exit="contentBgExit"
          className="page__content-bg"
          style={{ backgroundColor: secondaryColor }}
        >
          <img
            srcSet={`${imagePathSmall}, ${imagePath} 2x`}
            src={imagePath}
            className="image"
            alt="vikings info img"
          />
        </m.div>
      </div>
      <article className="page__article">
        {Object.keys(textBlocks).map((position) => (
          <m.div
            key={position}
            variants={variants}
            custom={position === 'left' ? 1 : 1.1}
            initial="textInitial"
            animate="textAnimate"
            exit="textExit"
            className="page__text-block"
          >
            {textBlocks[position as keyof typeof textBlocks].map((text) => (
              <p key={text} className="page__text">
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
