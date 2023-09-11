export interface IComments {
  comment: string;
  author: string;
  created: number;
  children?: {
    subcomment: string;
    author: string;
    created: number;
  }[];
}
