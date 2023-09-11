import React from 'react';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { Actions } from './Actions';

export function Controls({ rating }: { rating: number }) {
  return (
    <div className={styles.controls}>
      <KarmaCounter rating={rating} />
      <CommentsButton />
      <Actions />
    </div>
  );
}
