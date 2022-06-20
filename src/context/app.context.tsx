import { IAppContext, Theme } from '../types';
import React, { PropsWithChildren, useState } from 'react';

const defaultState: IAppContext = {
  theme: 'light',
  switchTheme: () => { },
};

const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = (props: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<Theme>('light');

  const switchTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppContext.Provider value={{
      theme,
      switchTheme,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
