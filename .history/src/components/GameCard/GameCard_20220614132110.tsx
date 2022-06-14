import React from 'react';

import styles from './GameCard.module.sass';

export type GameCardProps = {
  imgSrc: string;
  name: string;
}

function GameCard({ image, name }: GameCardProps) {
  return (
    <div className={styles['card']}>
      <img className={styles['card__img']} src={imgSrc} alt="game"/>
      <div className={styles['card__name']}>{name}</div>
    </div>
  );
}

export default GameCard;