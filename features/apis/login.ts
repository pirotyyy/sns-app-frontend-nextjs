import { apiClient } from '@/lib/apiClient';
import { LoginForm } from '@/types/LoginForm.type';
import { AxiosRequestConfig } from 'axios';

export const login = async (formData: any) => {
  return await apiClient.post('auth/login/', formData);
};
