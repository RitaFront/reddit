import React, { createContext } from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { IPosts } from '../interfaces/posts.interface';

export const postsContext = createContext<IPosts[]>([]);

export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = usePostsData();

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  );
}
