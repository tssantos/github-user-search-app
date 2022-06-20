import React from 'react';
import Logo from '../Logo';
import Theme from '../Theme';

import styles from './Header.module.css';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Theme/>
    </header>
  );
}

export default Header;