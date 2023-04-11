import { fetchCurrentUser } from '@/apis/fetchCurrentUser';
import Layout from '@/components/layouts/Layout';
import Profile from '@/features/Profile/Profile';
import { currentUserState } from '@/states/currentUserState';
import { isAuthPageState } from '@/states/isAuthPageState';
import { CurrentUser } from '@/types/CurrentUser.type';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const profile = () => {
  const setIsAuthPage = useSetRecoilState(isAuthPageState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: CurrentUser = await fetchCurrentUser();
        setCurrentUser(user);
        setIsAuthPage(true);
      } catch (error) {
        console.log(error);
        router.push('/');
      }
    };
    fetchUser();
  }, []);

  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default profile;
