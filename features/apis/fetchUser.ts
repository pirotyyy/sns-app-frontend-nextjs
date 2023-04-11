import { fetchFollow } from '@/apis/fetchFollow';
import { fetchFollower } from '@/apis/fetchFollower';
import { apiClient } from '@/lib/apiClient';
import { User } from '@/types/User.type';

export const fetchUser = async (
  userId: string | string[] | undefined
): Promise<User> => {
  const res = await apiClient.get(`user/${userId}/detail/`);
  const follow = await fetchFollow(res.data.userId);
  const follower = await fetchFollower(res.data.userId);
  return {
    userId: res.data.userId,
    username: res.data.username,
    follow: follow,
    follower: follower,
  };
};
