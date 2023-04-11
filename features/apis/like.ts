import { apiClient } from '@/lib/apiClient';

export const like = async (tweetId: string) => {
  return await apiClient.put(`like/${tweetId}`);
};
