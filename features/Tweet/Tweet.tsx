import React, { useEffect, useState } from 'react';
import { AiOutlineComment, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import styles from './Tweet.module.scss';
import Link from 'next/link';
import { Tweet } from '@/types/Tweet.type';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '@/states/currentUserState';
import { like } from '../apis/like';
import { unlike } from '../apis/unlike';
import { selectedTweetState } from '@/states/selectedTweetState';
import TweetDetail from '../TweetDetail/TweetDetail';

type Props = {
  tweet: Tweet;
  onClick: () => void;
};

const Tweet = ({ tweet, onClick }: Props) => {
  const selectedTweet = useRecoilValue(selectedTweetState);
  const currentUser = useRecoilValue(currentUserState);
  const [likeNum, setLikeNum] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikeNum(tweet.like.length);
    setIsLiked(tweet.like.includes(currentUser.userId));
  }, []);

  const handleLike = async () => {
    await like(tweet.tweetId);
    setIsLiked(true);
    setLikeNum(likeNum + 1);
  };

  const handleUnLike = async () => {
    await unlike(tweet.tweetId);
    setIsLiked(false);
    setLikeNum(likeNum - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src='/images/person1.jpg' alt='' className={styles.prof_img} />
          <Link
            className={styles.user_info}
            href='/profile/[userId]'
            as={`/profile/${tweet.userId}`}
            prefetch
          >
            <div className={styles.user_info}>
              <h2 className={styles.username}>{tweet.username}</h2>
              <h2 className={styles.userId}>{tweet.userId}</h2>
            </div>
          </Link>
        </div>
        <div className={styles.main}>
          <p className={styles.text}>{tweet.text}</p>
          <div className={styles.icon_list}>
            <AiOutlineComment
              className={styles.icon_comment}
              onClick={onClick}
            />
            {isLiked ? (
              <AiFillHeart
                className={styles.icon_like}
                onClick={handleUnLike}
              />
            ) : (
              <AiOutlineHeart
                className={styles.icon_like}
                onClick={handleLike}
              />
            )}
            <h5>{likeNum}</h5>
            <FiShare className={styles.icon_share} />
          </div>
        </div>
      </div>
      {tweet.tweetId === selectedTweet ? <TweetDetail /> : <></>}
    </div>
  );
};

export default Tweet;
