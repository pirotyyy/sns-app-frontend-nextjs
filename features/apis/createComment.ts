import { apiClient } from '@/lib/apiClient';
import { PostCommentForm } from '@/types/PostCommentForm';

export const createComment = async (formData: PostCommentForm) => {
  const res = await apiClient.post('comment/', formData);
  return res.data;
};
