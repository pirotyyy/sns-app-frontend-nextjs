import React, { FormEvent, useState } from 'react';

import styles from './CommentForm.module.scss';
import { PostCommentForm } from '@/types/PostCommentForm';
import { createComment } from '../apis/createComment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentsState } from '@/states/commentsState';
import { fetchComments } from '../apis/fetchComments';
import { selectedTweetState } from '@/states/selectedTweetState';

const CommentForm = () => {
  const [comments, setComments] = useRecoilState(commentsState);
  const selectedTweet = useRecoilValue(selectedTweetState);
  const [postCommentForm, setPostCommentForm] = useState<PostCommentForm>({
    tweetId: selectedTweet ? selectedTweet : '',
    text: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createComment(postCommentForm);
      setPostCommentForm({
        tweetId: '',
        text: '',
      });
      setComments(await fetchComments(selectedTweet ? selectedTweet : ''));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <img src='/images/person1.jpg' alt='' className={styles.prof_img} />
          <input
            className={styles.input_form}
            type='text'
            value={postCommentForm?.text}
            placeholder='Enter your comment'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPostCommentForm({ ...postCommentForm, text: e.target.value });
            }}
          />
          <input type='submit' className={styles.post_btn} value='投稿' />
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
