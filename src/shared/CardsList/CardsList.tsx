import React, { useContext } from 'react';
import styles from './cardslist.scss';
import { Card } from './Card/Card';
import { postsContext } from '../context/postsContext';
import { IPosts } from '../interfaces/posts.interface';

export function CardsList() {
  const list: IPosts[] = useContext(postsContext);

  return (
    <ul className={styles.cardList}>
      {list?.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
}
