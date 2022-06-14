import { Rate }  from 'antd';
import React from 'react';

import styles from './GameRate.module.sass';
import 'antd/dist/antd.css';

function GameRate() {
  return (
    <div className={styles['']}>
      <Rate allowHalf defaultValue={4.5}/>
    </div>
  );
}

export default GameRate;