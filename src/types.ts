export type Theme = 'light' | 'dark';

export interface IAppContext {
  theme: Theme;
  switchTheme: () => void;
}
