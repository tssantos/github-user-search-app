import React, { useContext } from 'react';
import AppContext from '../../context/app.context';
import { Utils } from '../../utils';

import styles from './User.module.css';
import { ReactComponent as IconCompany } from '../..//assets/icon-company.svg';
import { ReactComponent as IconLocation } from '../..//assets/icon-location.svg';
import { ReactComponent as IconTwitter } from '../..//assets/icon-twitter.svg';
import { ReactComponent as IconWebsite } from '../..//assets/icon-website.svg';

interface UserProps {}

const User = (props: UserProps) => {
  const appContext = useContext(AppContext);

  return (
    <div className={`${styles.user} ${styles[appContext.theme]}`}>
      <img className={styles.avatar} src={appContext.user.avatar_url} alt={appContext.user.login}/>
      <div className={styles.joined}><p>{Utils.formatJoinedAt(appContext.user.created_at)}</p></div>
      <div className={styles.info}>
        <p className={styles.name}>{appContext.user.name}</p>
        <p className={styles.username}>{`@${appContext.user.login}`}</p>
        <p className={`${styles.bio} ${(!appContext.user.bio && styles['undefined']) || ''}`}>
          {appContext.user.bio ?? 'This profile has no bio' }
        </p>
        <div className={styles.statistics}>
          <div className={styles.counter}>
            <p className={styles.label}>Repos</p>
            <p className={styles.value}>{appContext.user.public_repos}</p>
          </div>
          <div className={styles.counter}>
            <p className={styles.label}>Followers</p>
            <p className={styles.value}>{appContext.user.followers}</p>
          </div>
          <div className={styles.counter}>
            <p className={styles.label}>Following</p>
            <p className={styles.value}>{appContext.user.following}</p>
          </div>
        </div>
        <div className={styles.links}>
          <div className={`${styles.link} ${(!appContext.user.location && styles['undefined']) || ''}`}>
            <IconLocation/><p>{appContext.user.location}</p></div>
          <div className={`${styles.link} ${(!appContext.user.twitter_username && styles['undefined']) || ''}`}>
            <IconTwitter/><p>{appContext.user.twitter_username ?? 'Not available'}</p></div>
          <div className={`${styles.link} ${(!appContext.user.blog && styles['undefined']) || ''}`}>
            <IconWebsite/><p>{appContext.user.blog}</p></div>
          <div className={`${styles.link} ${(!appContext.user.company && styles['undefined']) || ''}`}>
            <IconCompany/><p>{appContext.user.company}</p></div>
        </div>
      </div>
    </div>
  );
}

export default User;