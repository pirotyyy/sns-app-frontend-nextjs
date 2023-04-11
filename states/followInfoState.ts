import { atom } from 'recoil';

export const followInfoState = atom({
  key: 'followInfoState',
  default: {
    follow: 0,
    follower: 0,
  },
});
