import { Tweet } from '@/types/Tweet.type';
import { atom } from 'recoil';

export const tweetState = atom<Tweet | null>({
  key: 'tweetState',
  default: null,
});
