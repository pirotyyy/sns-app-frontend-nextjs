import { apiClient } from '@/lib/apiClient';

export const unfollow = async (id: string) => {
  return await apiClient.delete(`unfollow/${id}/`);
};
