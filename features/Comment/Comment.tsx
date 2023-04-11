import React from 'react';

import styles from './Comment.module.scss';
import { Comment } from '@/types/Comment.type';
import Link from 'next/link';

type Props = {
  comment: Comment;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src='/images/person1.jpg' alt='' className={styles.prof_img} />
          <Link
            className={styles.user_info}
            href='/profile/[userId]'
            as={`/profile/${comment.userId}`}
            prefetch
          >
            <h2 className={styles.username}>{comment.username}</h2>
            <h2 className={styles.userId}>{comment.userId}</h2>
          </Link>
        </div>
        <div className={styles.main}>
          <p className={styles.text}>{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
