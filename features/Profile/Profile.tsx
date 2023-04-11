import React, { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { userState } from '@/states/userState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState } from '@/states/currentUserState';
import { useRouter } from 'next/router';
import { fetchUser } from '../apis/fetchUser';
import { follow } from '../apis/follow';
import TimeLine from '../TimeLine/TimeLine';
import { unfollow } from '../apis/unfollow';

const Profile = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [user, setUser] = useRecoilState(userState);
  const [followNum, setFollowNum] = useState(0);
  const [followerNum, setFollowerNum] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const handleFollow = async () => {
    try {
      await follow(user.userId);
      setFollowerNum(followerNum + 1);
      setCurrentUser({
        ...currentUser,
        follow: [...currentUser.follow, user.userId],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollow = async () => {
    try {
      await unfollow(user.userId);
      setFollowerNum(followerNum - 1);
      setCurrentUser({
        ...currentUser,
        follow: currentUser.follow.filter(
          (item: string) => item !== user.userId
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedUser = await fetchUser(id);
        setUser({
          userId: fetchedUser.userId,
          username: fetchedUser.username,
          follow: fetchedUser.follow,
          follower: fetchedUser.follower,
        });
        setFollowNum(fetchedUser.follow.length);
        setFollowerNum(fetchedUser.follower.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src='/images/bg-img.jpg' alt='' className={styles.header_img} />
          <img src='/images/person1.jpg' alt='' className={styles.prof_img} />
        </div>
        <div className={styles.prof}>
          <h2 className={styles.username}>{user.username}</h2>
          <h3 className={styles.userId}>@{user.userId}</h3>
          <div className={styles.follow}>
            <div className={styles.follow_info}>
              <span className={styles.num}>{followNum}</span>
              <span className={styles.type}>Following</span>
            </div>
            <div className={styles.follow_info}>
              <span className={styles.num}>{followerNum}</span>
              <span className={styles.type}>Follower</span>
            </div>
          </div>
          {user.userId === currentUser.userId ? (
            <button className={styles.btn}>Setting</button>
          ) : (
            <>
              {currentUser.follow.includes(user.userId) ? (
                <button className={styles.btn} onClick={handleUnFollow}>
                  フォローを外す
                </button>
              ) : (
                <button className={styles.btn} onClick={handleFollow}>
                  フォローする
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <TimeLine />
    </div>
  );
};

export default Profile;
