import { atom } from 'recoil';

export const selectedTweetState = atom<string | null>({
  key: 'selectedTweetState',
  default: null,
});
