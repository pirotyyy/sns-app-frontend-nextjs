import { apiClient } from '@/lib/apiClient';

export const unlike = async (tweetId: string) => {
  return await apiClient.delete(`unlike/${tweetId}`);
};
