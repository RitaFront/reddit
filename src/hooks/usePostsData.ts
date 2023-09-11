import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPosts } from '../shared/interfaces/posts.interface';
import { useTypedSelector } from './useTypedSelector';

export function getTimePost(created: number) {
  const today = new Date();
  const createAt = new Date(created * 1000);
  const daysLag = Math.ceil(
    Math.abs(today.getTime() - createAt.getTime()) / (1000 * 3600)
  );
  let time = '';
  switch (true) {
    case (daysLag > 1 && daysLag < 5) ||
      (daysLag > 21 && daysLag < 25):
      time = `${daysLag} часа назад`;
      break;
    case daysLag > 4 && daysLag < 21:
      time = `${daysLag} часов назад`;
      break;
    case daysLag === 1 || daysLag === 21:
      time = `${daysLag} час назад`;
      break;
    default:
      time = 'менее часа назад';
  }
  return daysLag < 24 ? `${time}` : `${createAt}`;
}

export const usePostsData = () => {
  const { token } = useTypedSelector((state) => state.token);
  const [dataPosts, setDataPosts] = useState<IPosts[]>([]);
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  useEffect(() => {
    if (token.length > 10) {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const posts: IPosts[] = res.data.data.children.map(
            (post: any) => {
              return {
                id: post.data.id,
                title: post.data.title,
                author: post.data.author,
                avatarSrc: post.data.sr_detail.icon_img
                  ? post.data.sr_detail.icon_img
                  : undefined,
                preview: post.data.preview?.images
                  ? post.data.preview.images?.[0].source.url.replace(
                      /(\&amp\;)/g,
                      '&'
                    )
                  : undefined,
                createdAt: getTimePost(post.data.created_utc),
                rating: post.data.ups,
              };
            }
          );
          return posts;
        })
        .then((posts) => {
          setDataPosts([...posts]);
        })
        .catch((err) => console.log(err));
    } else return;
  }, [token]);

  return dataPosts;
};
