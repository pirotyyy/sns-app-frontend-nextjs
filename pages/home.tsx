import { fetchCurrentUser } from '@/apis/fetchCurrentUser';
import Layout from '@/components/layouts/Layout';
import TimeLine from '@/features/TimeLine/TimeLine';
import { currentUserState } from '@/states/currentUserState';
import { CurrentUser } from '@/types/CurrentUser.type';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import styles from '@/styles/Home.module.scss';
import PostForm from '@/features/PostForm/PostForm';
import { isAuthPageState } from '@/states/isAuthPageState';

const home = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const setIsAuthPage = useSetRecoilState(isAuthPageState);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: CurrentUser = await fetchCurrentUser();
        setCurrentUser(user);
        setIsAuthPage(true);
      } catch (error) {
        router.push('/');
      }
    };
    fetchUser();
  }, []);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <TimeLine />
      </div>
    </Layout>
  );
};

export default home;
