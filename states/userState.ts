import { User } from '@/types/User.type';
import { atom } from 'recoil';

export const userState = atom<User>({
  key: 'userState',
  default: {
    userId: '',
    username: '',
    followNum: 0,
    followerNum: 0,
  },
});
