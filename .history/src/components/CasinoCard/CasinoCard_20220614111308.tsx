import React from 'react';

import brandImage from '../../assets/brandImage.svg';
import PromoBanner from '../PromoBanner/PromoBanner';

import styles from './CasinoCard.module.sass'

function CasinoCard() {
  return (
    <div className={styles['casino-card']}>
      <img className={styles['company-icon']} src={brandImage} alt="brandIMage" />
      <PromoBanner
    </div>
  );
}

export default CasinoCard;
