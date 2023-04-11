import { apiClient } from '@/lib/apiClient';
import { PostTweetForm } from '@/types/PostTweetForm.type';

export const createTweet = async (formData: PostTweetForm) => {
  const res = await apiClient.post('tweet/', formData);
  return res.data;
};
