import Layout from '@/components/layouts/Layout';
import LoginForm from '@/features/LoginForm/LoginForm';
import React from 'react';

import styles from '@/styles/Form.module.scss';

const login = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default login;
