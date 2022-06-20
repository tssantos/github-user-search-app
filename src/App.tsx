import React, { useContext } from 'react';

import styles from './App.module.css';
import Header from './components/Header';
import AppContext from './context/app.context';

function App() {
  const appContext = useContext(AppContext);
  return (
    <div className={`${styles.app} ${styles[appContext.theme]}`}>
      <Header/>
    </div>
  );
}

export default App;
