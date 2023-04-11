import { Comment } from '@/types/Comment.type';
import { atom } from 'recoil';

export const commentsState = atom<Comment[]>({
  key: 'commentsState',
  default: [],
});
