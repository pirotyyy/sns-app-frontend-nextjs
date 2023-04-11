import React from 'react';

import styles from './Leftbar.module.scss';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '@/states/currentUserState';
import Link from 'next/link';

const Leftbar = () => {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.user_menu}>
          <Link
            href='/profile/[userId]'
            as={`/profile/${currentUser?.userId}`}
            prefetch
          >
            <img src='/images/person1.jpg' alt='' />
            <div className={styles.user_info}>
              <h3 className={styles.userName}>{currentUser?.username}</h3>
              <h3 className={styles.userId}>{currentUser?.userId}</h3>
            </div>
          </Link>
        </div>
        <hr />
        <ul className={styles.btn_list}>
          <Link href='/home'>
            <li className={styles.btn}>
              <span className={styles.btn_text}>Home</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.btn}>
              <span className={styles.btn_text}>Explore</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.btn}>
              <span className={styles.btn_text}>Notifications</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.btn}>
              <span className={styles.btn_text}>Messages</span>
            </li>
          </Link>
          <Link
            href='/profile/[userId]'
            as={`/profile/${currentUser?.userId}`}
            prefetch
          >
            <li className={styles.btn}>
              <span className={styles.btn_text}>Profile</span>
            </li>
          </Link>
          <button className={styles.tweet_btn}>Tweet</button>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
