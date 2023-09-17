// import React, { createContext } from 'react';
// import { usePostsData } from '../../hooks/usePostsData';
// import { IPostsContext } from '../interfaces/posts.interface';

// export const postsContext = createContext<IPostsContext>({
//   dataPosts: [],
//   loading: false,
//   errorLoading: '',
// });

// export function PostsContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { dataPosts, loading, errorLoading } = usePostsData();

//   return (
//     <postsContext.Provider
//       value={{ dataPosts, loading, errorLoading }}
//     >
//       {children}
//     </postsContext.Provider>
//   );
// }
