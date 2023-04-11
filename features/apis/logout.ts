import { apiClient } from '@/lib/apiClient';

export const logout = async () => {
  return await apiClient.post('auth/logout/');
};
