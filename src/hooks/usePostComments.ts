import { useEffect, useState } from 'react';
import axios from 'axios';
import { IComments } from '../shared/interfaces/postComments.interface';
import { useTypedSelector } from './useTypedSelector';
import { getTimePost } from '../utils/js';

export const usePostComments = (postId: string) => {
  const { token } = useTypedSelector((state) => state.token);
  const [postComments, setPostComments] = useState<IComments[]>([]);
  useEffect(() => {
    if (token.length > 10) {
      axios
        .get(`https://oauth.reddit.com/comments/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const comments: IComments[] =
            res.data?.[1].data.children.map((comment: any) => {
              const subcomments =
                comment.data.replies?.data?.children.filter(
                  (item: any) => item.kind === 't1'
                );
              return {
                comment: comment.data.body,
                author: comment.data.author,
                created: getTimePost(comment.data.created_utc),
                children: subcomments?.map((subcomment: any) => {
                  return {
                    subcomment: subcomment.data?.body,
                    author: subcomment.data?.author,
                    created: getTimePost(
                      subcomment.data?.created_utc
                    ),
                  };
                }),
              };
            });
          return comments;
        })
        .then((comments) => {
          setPostComments([...comments]);
        })
        .catch(console.log);
    } else return;
  }, [token]);

  return postComments;
};
