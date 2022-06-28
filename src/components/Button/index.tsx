import React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/app.context';

import styles from './Button.module.css';

interface ButtonProps {}

const Button = (props: ButtonProps) => {
  const appContext = useContext(AppContext);

  return (
    <div onClick={appContext.onSubmitSearch} className={styles.button}>
      Search
    </div>
  );
}

export default Button;