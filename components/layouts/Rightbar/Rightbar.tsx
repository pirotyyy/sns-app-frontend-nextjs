import React from 'react';

import styles from './Rightbar.module.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserState } from '@/states/currentUserState';
import { logout } from '@/features/apis/logout';
import { useRouter } from 'next/router';
import { isAuthPageState } from '@/states/isAuthPageState';

const Rightbar = () => {
  const router = useRouter();
  const setIsAuthPage = useSetRecoilState(isAuthPageState);

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthPage(false);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = useRecoilValue(currentUserState);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>フォローしているユーザー</h1>
        <ul>
          {currentUser.follow.map((userId: string) => {
            return <li>{userId}</li>;
          })}
        </ul>
        <h1>フォロワー</h1>
        <ul>
          {currentUser.follower.map((userId: string) => {
            return <li>{userId}</li>;
          })}
        </ul>
        <button className={styles.logout_btn} onClick={handleLogout}>
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
