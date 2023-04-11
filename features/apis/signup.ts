import { apiClient } from '@/lib/apiClient';
export const signUp = async (formData: any) => {
  return await apiClient.post('user/', formData);
};
