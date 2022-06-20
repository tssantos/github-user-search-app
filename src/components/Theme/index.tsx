import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import AppContext from '../../context/app.context';

import styles from './Theme.module.css';
import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg';
import { ReactComponent as IconSun } from '../../assets/icon-sun.svg';

interface ThemeProps { }

const Theme = (props: ThemeProps) => {
  const appContext = useContext(AppContext);

  const onClick: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    appContext.switchTheme();
  };

  return (
    <div className={`${styles.theme} ${styles[appContext.theme]}`} onClick={onClick}>
      {appContext.theme === 'dark' && <><p>Light</p><IconSun/></>}
      {appContext.theme === 'light' && <><p>Dark</p><IconMoon/></>}
    </div>
  );
};

export default Theme;;;;