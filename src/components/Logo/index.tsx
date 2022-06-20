import React, { useContext } from 'react';
import AppContext from '../../context/app.context';

import styles from './Logo.module.css';

interface LogoProps {}

const Logo = (props: LogoProps) => {
  const appContext = useContext(AppContext);
  return (
    <div className={`${styles.logo} ${styles[appContext.theme]}`}>
      devfinder
    </div>
  );
}

export default Logo;