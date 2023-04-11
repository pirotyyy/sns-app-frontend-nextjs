import Layout from '@/components/layouts/Layout';
import SignUpForm from '@/features/SignUpForm/SignUpForm';
import React from 'react';

import styles from '@/styles/Form.module.scss';

const signup = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default signup;
