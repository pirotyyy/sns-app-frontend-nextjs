import { apiClient } from '@/lib/apiClient';
import { fetchFollow } from './fetchFollow';
import { fetchFollower } from './fetchFollower';
import { CurrentUser } from '@/types/CurrentUser.type';

export const fetchCurrentUser = async (): Promise<CurrentUser> => {
  try {
    const res = await apiClient.get('user/');
    const follow = await fetchFollow(res.data.userId);
    const follower = await fetchFollower(res.data.userId);
    return {
      userId: res.data.userId,
      username: res.data.username,
      email: res.data.email,
      follow: follow,
      follower: follower,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
