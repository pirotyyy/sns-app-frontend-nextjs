import { Tweet } from '@/types/Tweet.type';
import { atom } from 'recoil';

export const tweetsState = atom<Tweet[]>({
  key: 'tweetsState',
  default: [],
});
