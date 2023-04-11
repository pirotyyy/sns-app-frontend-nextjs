import { CurrentUser } from '@/types/CurrentUser.type';
import { atom } from 'recoil';

export const currentUserState = atom<any>({
  key: 'currentUserState',
  default: {
    userId: '',
    username: '',
    email: '',
    follow: [],
    follower: [],
  },
});
