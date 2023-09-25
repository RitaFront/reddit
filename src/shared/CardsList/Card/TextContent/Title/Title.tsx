import React from 'react';
import styles from './title.scss';
import { Link } from 'react-router-dom';

interface ITitle {
  title: string;
  id: string;
}

export function Title({ title, id }: ITitle) {
  return (
    <h2 className={styles.title}>
      <Link to={'/posts/' + id} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}

{
  /* <Post id={id} onClose={() => setIsModalOpen(false)} /> */
}
