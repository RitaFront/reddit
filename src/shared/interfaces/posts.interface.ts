export interface IPosts {
  id?: string;
  title?: string;
  author?: string;
  avatarSrc?: string;
  preview?: string;
  createdAt?: number;
  rating?: number;
}

export interface IPostsContext {
  dataPosts: IPosts[];
  loading: boolean;
  errorLoading: string;
}
