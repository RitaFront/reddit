import React from 'react';
import styles from './card.scss';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { IPosts } from '../../interfaces/posts.interface';

interface ICard {
  data: IPosts;
}

export function Card({ data }: ICard) {
  return (
    <li className={styles.card}>
      <TextContent
        createdAt={data.createdAt!}
        author={data.author!}
        avatarSrc={data.avatarSrc!}
        title={data.title!}
        id={data.id!}
      />
      <Preview previewSrc={data.preview!} />
      <Menu />
      <Controls rating={data.rating!} />
    </li>
  );
}
