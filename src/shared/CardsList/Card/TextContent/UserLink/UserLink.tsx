import React from 'react';
import styles from './userlink.scss';

interface IUserLink {
  author: string;
  avatarSrc: string;
}

export function UserLink({ author, avatarSrc }: IUserLink) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={
          avatarSrc
            ? avatarSrc
            : 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
        }
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>
        {author}
      </a>
    </div>
  );
}
