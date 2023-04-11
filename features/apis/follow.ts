import { apiClient } from '@/lib/apiClient';

export const follow = async (id: string) => {
  return await apiClient.put(`follow/${id}/`);
};
