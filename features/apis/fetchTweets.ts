import { apiClient } from '@/lib/apiClient';
import { Tweet } from '@/types/Tweet.type';

export const fetchTweets = async (): Promise<Tweet[]> => {
  const res = await apiClient.get('tweet/list');
  res.data.sort((a: any, b: any) => {
    const dateA = Date.parse(a.createdAt);
    const dateB = Date.parse(b.createdAt);
    return dateB - dateA;
  });

  const results = await Promise.all(
    res.data.map(async (tweet: any) => {
      const { data: like } = await apiClient.get(`like/${tweet.tweetId}/`);
      const { data: comment } = await apiClient.get(
        `comment/${tweet.tweetId}/`
      );
      return { ...tweet, like, comment };
    })
  );

  return results;
};
