import React, { FormEvent, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './SignUpForm.module.scss';
import { SignUpForm } from '@/types/SignUpForm.type';
import { useRouter } from 'next/router';
import { signUp } from '../apis/signup';
import Link from 'next/link';

const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    userId: '',
    username: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(signUpForm);
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>SignUp</h1>
        <div className={styles.form}>
          <FaRegUserCircle className={styles.user_icon} />
          <form className={styles.input_form} onSubmit={handleSubmit}>
            <div className={styles.input_item}>
              <label htmlFor='userId'>ユーザーID</label>
              <input
                type='text'
                id='userId'
                value={signUpForm.userId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpForm({ ...signUpForm, userId: e.target.value });
                }}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor='userName'>ユーザー名</label>
              <input
                type='text'
                id='userName'
                value={signUpForm.username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpForm({ ...signUpForm, username: e.target.value });
                }}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor='Email'>Eメール</label>
              <input
                type='email'
                id='email'
                value={signUpForm.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpForm({ ...signUpForm, email: e.target.value });
                }}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor='password'>パスワード</label>
              <input
                type='password'
                id='password'
                value={signUpForm.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpForm({ ...signUpForm, password: e.target.value });
                }}
              />
            </div>
            <input type='submit' className={styles.signup_btn} value='SignUp' />
          </form>
          <p>You already have any acount ??</p>
          <Link href='/login'>
            <p>Login!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
