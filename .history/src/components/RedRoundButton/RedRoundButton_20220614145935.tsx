import React from 'react';

import styles from './RedRoundButton.module.sass';

type redRoundButtonProps = {
  childr
}

function RedRoundButton({ children }) {
  return (
    <button>{children}</button>
  );
}

export default RedRoundButton;
