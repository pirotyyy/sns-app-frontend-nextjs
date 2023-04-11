import React, { FormEvent, useState } from 'react';

import { BsImageFill, BsFiletypeGif } from 'react-icons/bs';
import { MdInsertEmoticon } from 'react-icons/md';
import { GrSchedule } from 'react-icons/gr';
import styles from './PostForm.module.scss';
import { useRecoilState } from 'recoil';
import { tweetsState } from '@/states/tweetsState';

import { createTweet } from '../apis/createTweet';
import { PostTweetForm } from '@/types/PostTweetForm.type';
import { fetchTweets } from '../apis/fetchTweets';

const PostForm = () => {
  const [tweets, setTweets] = useRecoilState(tweetsState);
  const [postForm, setPostForm] = useState<PostTweetForm>({
    text: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTweet(postForm);
      setPostForm({
        text: '',
      });
      setTweets(await fetchTweets());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.top}>
            <img src='/images/person1.jpg' alt='' className={styles.prof_img} />
            <input
              type='text'
              value={postForm?.text}
              placeholder="What's happening ??"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostForm({ text: e.target.value });
              }}
            />
          </div>
          <hr />
          <div className={styles.bottom}>
            <div className={styles.icon_list}>
              <BsImageFill className={styles.icon} />
              <BsFiletypeGif className={styles.icon} />
              <MdInsertEmoticon className={styles.icon} />
              <GrSchedule className={styles.icon} />
            </div>
            <input type='submit' className={styles.post_btn} value='投稿' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
