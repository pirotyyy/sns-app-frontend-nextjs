import React, { FC, ReactNode, useEffect } from 'react';

import styles from './Layout.module.scss';
import Header from './Header/Header';
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserState } from '@/states/currentUserState';
import { CurrentUser } from '@/types/CurrentUser.type';
import { fetchCurrentUser } from '@/apis/fetchCurrentUser';
import { isAuthPageState } from '@/states/isAuthPageState';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const isAuthPage = useRecoilValue(isAuthPageState);

  return (
    <div className={styles.wrapper}>
      <Header />
      {isAuthPage ? (
        <div>
          <Leftbar />
          <main>{children}</main>
          <Rightbar />
        </div>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
};

export default Layout;
