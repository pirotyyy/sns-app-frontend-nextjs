import { apiClient } from '@/lib/apiClient';

export const fetchFollow = async (userId: string) => {
  const res = await apiClient.get(`follow/${userId}`);
  return res.data;
};
