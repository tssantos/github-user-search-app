import { IAppContext, Theme, User } from '../types';
import React, { ChangeEvent, PropsWithChildren, useState } from 'react';
import { ChangeEventHandler } from 'react';
import { MouseEventHandler, MouseEvent } from 'react';
import axios from 'axios';

const defaultTheme: Theme = 'light';
const defaultUser: User = {
  login: 'octocat',
  id: 583231,
  node_id: 'MDQ6VXNlcjU4MzIzMQ==',
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'The Octocat',
  company: '@github',
  blog: 'https://github.blog',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
  twitter_username: null,
  public_repos: 8,
  public_gists: 8,
  followers: 6155,
  following: 9,
  created_at: '2011-01-25T18:44:36Z',
  updated_at: '2022-03-22T14:07:15Z'
};


const defaultState: IAppContext = {
  theme: defaultTheme,
  user: defaultUser,
  hasResult: true,
  busy: false,
  switchTheme: () => { },
  setUser: (user: User) => {},
  onInputChange: () => {},
  onSubmitSearch: () => {},
};

const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = (props: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [user, setUser] = useState<User>(defaultUser);
  const [hasResult, setHasResult] = useState(true);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');

  const switchTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  };

  const onInputChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.currentTarget.value);
  }

  const onSubmitSearch: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!busy) {
      setBusy(true);
      searchUser(search);
    }
  }

  const searchUser = async (username: string) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        setUser(res.data);
        setHasResult(true);
      })
      .catch((err) => {
        setHasResult(false);
      })
      .finally(() => {
        setBusy(false);
      })
  }

  return (
    <AppContext.Provider value={{
      theme,
      user,
      hasResult,
      busy,
      switchTheme,
      setUser,
      onInputChange,
      onSubmitSearch,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
