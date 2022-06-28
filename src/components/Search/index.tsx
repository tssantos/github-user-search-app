import React, { useContext } from 'react';
import AppContext from '../../context/app.context';
import Button from '../Button';

import styles from './Search.module.css';
import { ReactComponent as IconSearch } from '../../assets/icon-search.svg';

interface SearchProps {}

const Search = (props: SearchProps) => {
  const appContext = useContext(AppContext);

  return (
    <div className={`${styles.search} ${styles[appContext.theme]}`}>
      <IconSearch className={styles.icon}/>
      <input className={styles.input} onChange={appContext.onInputChange} placeholder='Search GitHub username…'/>
      { !appContext.hasResult && <p className={styles.noResults}>No Results</p> }
      <Button/>
    </div>
  );
}

export default Search;