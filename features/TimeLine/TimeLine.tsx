import { tweetsState } from '@/states/tweetsState';
import React, { FormEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fetchTweets } from '../apis/fetchTweets';
import styles from './TimeLine.module.scss';
import Tweet from '../Tweet/Tweet';
import { PostTweetForm } from '@/types/PostTweetForm.type';
import PostForm from '../PostForm/PostForm';
import { selectedTweetState } from '@/states/selectedTweetState';

const TimeLine = () => {
  const [tweets, setTweets] = useRecoilState(tweetsState);
  const [selectedTweet, setSelectedTweet] = useRecoilState(selectedTweetState);

  const handleTweetClick = (id: string) => {
    setSelectedTweet(id);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setTweets(await fetchTweets());
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PostForm />
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.tweetId}
            tweet={tweet}
            onClick={() => handleTweetClick(tweet.tweetId)}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
