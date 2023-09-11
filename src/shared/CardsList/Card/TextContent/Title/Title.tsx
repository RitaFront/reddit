import React, { useState } from 'react';
import styles from './title.scss';
import { Post } from '../../../../Post/Post';

interface ITitle {
  title: string;
  id: string;
}

export function Title({ title, id }: ITitle) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={() => setIsModalOpen(true)}
      >
        {title}
      </a>
      {isModalOpen && (
        <Post id={id} onClose={() => setIsModalOpen(false)} />
      )}
    </h2>
  );
}
