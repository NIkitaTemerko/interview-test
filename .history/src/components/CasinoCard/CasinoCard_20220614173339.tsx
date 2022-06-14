import React from 'react';

import PromoBanner from '../PromoBanner/PromoBanner';
import GameCard, { GameCardProps } from '../GameCard/GameCard';

import bookOfDead from '../../assets/bookOfDead.jpg';
import buffalo from '../../assets/buffalo.jpg';
import starburst from '../../assets/starburst.jpg';
import brandImage from '../../assets/brandImage.svg';
import styles from './CasinoCard.module.sass'
import GameRate from '../GameRates/GameRate';
import { Progress } from 'antd';
import RedRoundButton from '../RedRoundButton/RedRoundButton';

const games: GameCardProps[] = [
  {
    image: {
      src: buffalo,
      alt: '',
    },
    name: 'Buffalo Slot Machine',
  },
  {
    image: {
      src: starburst,
      alt: '',
    },
    name: 'Starburst™ Slot'
  },
  {
    image: {
      src: bookOfDead,
      alt: '',
    },
    name: 'Book of Dead Slot Machine'
  },
];
const info = {
  brandImage,
  games
}

const countPercent = (percent: number | undefined) => {
  if(percent) return`${percent * 0.1}`;
};


function CasinoCard() {
  return (
    <>
      <div className={styles['casino-card']}>
        <div className={styles['casino-card__view-block']}>
          <img className={styles['casino-card__company-icon']} src={brandImage} alt="brandIMage" />
          <div className={styles['casino-card__promo-banner']}>
            <PromoBanner/>
          </div>
          <div className={styles['casino-card__game-link-card']}>
            {games.map((item) => (
              <GameCard image={item.image} name={item.name} />
            ))}
          </div>
          <div className={styles['casino-card__rate']}>
            <GameRate rate={4.5} reviews={'39,338'} />
          </div>
          <div className={styles['casino-card__circle-rate']}>
            <Progress strokeColor="#F5A623" trailColor="#CED0D4" width={58} type="circle" percent={98} format={countPercent} />
          </div>
          <div className={styles['casino-card__bonus-button']}>
            <RedRoundButton>Get Bonus</RedRoundButton>
            <div className={styles['casino-card__min-dep']}>Min. Deposit - £10</div>
          </div>
        </div>
        <div className={styles['casino-card__info-block']}>
          New Customers Only. Opt In Required. 7 Day Free Spin Expiry. New Customers Only. Opt In Required. 7 Day Free Spin Expiry. All Free Spins Will Auto Play On First Eligible Game Loaded. £10 Staking Requirement Must Be Met Within 30 Days Of Opt In. Eligibility Restrictions Apply. 18+ Further T&Cs Apply. Begambleaware.Org
        </div>
      </div>

      <div className={styles['casino-card__mobile-info-block']}>
        New Customers Only. Opt In Required. 7 Day Free Spin Expiry. New Customers Only. Opt In Required. 7 Day Free Spin Expiry. All Free Spins Will Auto Play On First Eligible Game Loaded. £10 Staking Requirement Must Be Met Within 30 Days Of Opt In. Eligibility Restrictions Apply. 18+ Further T&Cs Apply. Begambleaware.Org
      </div>
    </>
  );
}

export default CasinoCard;
