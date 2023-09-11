import React from 'react';
import styles from './textcontent.scss';
import { UserLink } from './UserLink';
import { Title } from './Title';

interface ITextContent {
  createdAt: number;
  author: string;
  avatarSrc: string;
  title: string;
  id: string;
}

export function TextContent({
  createdAt,
  author,
  avatarSrc,
  title,
  id,
}: ITextContent) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} avatarSrc={avatarSrc} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {createdAt}
        </span>
      </div>
      <Title id={id} title={title} />
    </div>
  );
}
