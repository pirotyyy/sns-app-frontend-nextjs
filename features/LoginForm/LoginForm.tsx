import React, { FormEvent, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './LoginForm.module.scss';
import { LoginForm } from '@/types/LoginForm.type';
import { useRouter } from 'next/router';
import { apiClient } from '@/lib/apiClient';
import Link from 'next/link';
import { login } from '../apis/login';

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    userId: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(loginForm);
      router.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.form}>
          <FaRegUserCircle className={styles.user_icon} />
          <form className={styles.input_form} onSubmit={handleSubmit}>
            <div className={styles.input_item}>
              <label htmlFor='userId'>ユーザーID</label>
              <input
                type='text'
                id='userId'
                value={loginForm.userId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginForm({ ...loginForm, userId: e.target.value });
                }}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor='password'>パスワード</label>
              <input
                type='password'
                id='password'
                value={loginForm.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginForm({ ...loginForm, password: e.target.value });
                }}
              />
            </div>
            <input type='submit' className={styles.login_btn} value='Login' />
          </form>
          <p>You don't have any account ??</p>
          <Link href='/signup'>
            <p>SignUp!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
