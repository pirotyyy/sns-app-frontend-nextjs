import { apiClient } from '@/lib/apiClient';

export const fetchComments = async (tweetId: string) => {
  const res = await apiClient.get(`comment/${tweetId}`);
  res.data.sort((a: any, b: any) => {
    const dateA = Date.parse(a.createdAt);
    const dateB = Date.parse(b.createdAt);
    return dateB - dateA;
  });

  return res.data;
};
