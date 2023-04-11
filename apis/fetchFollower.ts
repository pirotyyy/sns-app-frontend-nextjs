import { apiClient } from '@/lib/apiClient';

export const fetchFollower = async (userId: string) => {
  const res = await apiClient.get(`follower/${userId}`);
  return res.data;
};
