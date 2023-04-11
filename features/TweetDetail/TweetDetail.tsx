import React, { useEffect } from 'react';

import styles from './TweetDetail.module.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentsState } from '@/states/commentsState';
import { selectedTweetState } from '@/states/selectedTweetState';
import { fetchComments } from '../apis/fetchComments';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';

const TweetDetail = () => {
  const [comments, setComments] = useRecoilState(commentsState);
  const [selectedTweet, setSelectedTweet] = useRecoilState(selectedTweetState);

  useEffect(() => {
    const fetch = async () => {
      try {
        setComments(await fetchComments(selectedTweet ? selectedTweet : ''));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <hr className={styles.top_line} />
      <div className={styles.container}>
        <CommentForm />
        <div className={styles.comment_list}>
          {comments.map((comment) => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TweetDetail;
