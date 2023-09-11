import React from 'react';
import styles from './userblock.scss';
import { AnonIcon } from '../../../icons';
import { EColor, Text } from '../../../Text';

interface IUserBlockProps {
  avatarScr?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({
  avatarScr,
  username,
  loading,
}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=XX7F4TRRIaL2TT6vaNVsHw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarScr ? (
          <img
            src={avatarScr}
            alt="user avatar"
            className={styles.avatarImage}
          ></img>
        ) : (
          <AnonIcon />
        )}
      </div>
      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text
            size={20}
            color={username ? EColor.black : EColor.grey99}
          >
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}
