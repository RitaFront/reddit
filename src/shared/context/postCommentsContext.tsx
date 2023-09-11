import { createContext } from 'react';
import { IComments } from '../interfaces/postComments.interface';

export const postCommentsContext = createContext<IComments[]>([]);
