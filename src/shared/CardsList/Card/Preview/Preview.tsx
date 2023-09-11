import React from 'react';
import styles from './preview.scss';

interface IPreview {
  previewSrc: string;
}

export function Preview({ previewSrc }: IPreview) {
  return (
    <div className={styles.preview}>
      <img
        src={
          previewSrc
            ? previewSrc
            : 'https://cdn.dribbble.com/users/3012674/screenshots/9716527/media/6370bc6d8741c5c888a449fddffb2b2d.png?compress=1&resize=400x300&vertical=center'
        }
        alt="preview"
        className={styles.previewImg}
      />
    </div>
  );
}
