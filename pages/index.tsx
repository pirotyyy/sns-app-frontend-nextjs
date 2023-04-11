import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layouts/Layout';
import Link from 'next/link';

import styles from '@/styles/Top.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Gatheryy</h1>
          <h2 className={styles.welcome_text}>Welcome to Gatheryy !!</h2>
          <div className={styles.btn_list}>
            <Link href='/login' className={styles.login_btn}>
              <span>Login</span>
            </Link>
            <Link href='/signup' className={styles.signup_btn}>
              <span>SignUp</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
