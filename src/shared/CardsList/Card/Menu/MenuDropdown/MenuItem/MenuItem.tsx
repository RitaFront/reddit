import React from 'react';
import styles from './menuitem.scss';

interface IMenuItemProps {
  svg: React.ReactNode;
  title: string;
  onCLick?: () => void;
}

export function MenuItem({ svg, title, onCLick }: IMenuItemProps) {
  return (
    <li className={styles.menuItem} onClick={onCLick}>
      <button className={styles.menuItemBtn}>
        {svg}
        <span className={styles.menuItemTitle}>{title}</span>
      </button>
    </li>
  );
}
