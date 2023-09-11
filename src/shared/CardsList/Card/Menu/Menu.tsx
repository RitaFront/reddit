import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { MenuClose } from './MenuDropdown/MenuClose';

import { EName, Icon } from '../../../Icon';

const LIST = [
  {
    As: 'li' as const,
    onClick: () => console.log(1),
    className: styles.menuItem,
    children: (
      <button className={styles.menuItemBtn}>
        <Icon name={EName.comments} />
        <span className={styles.menuItemTitle}>Комментарии</span>
      </button>
    ),
  },

  {
    As: 'li' as const,
    onClick: () => console.log(1),
    className: styles.menuItem,
    children: (
      <button className={styles.menuItemBtn}>
        <Icon name={EName.share} />
        <span className={styles.menuItemTitle}>Поделиться</span>
      </button>
    ),
  },
  {
    As: 'li' as const,
    onClick: () => console.log(1),
    className: styles.menuItem,
    children: (
      <button className={styles.menuItemBtn}>
        <Icon name={EName.block} />
        <span className={styles.menuItemTitle}>Скрыть</span>
      </button>
    ),
  },
  {
    As: 'li' as const,
    onClick: () => console.log(2),
    className: styles.menuItem,
    children: (
      <button className={styles.menuItemBtn}>
        <Icon name={EName.save} />
        <span className={styles.menuItemTitle}>Сохранить</span>
      </button>
    ),
  },
  {
    As: 'li' as const,
    onClick: () => console.log(3),
    className: styles.menuItem,
    children: (
      <button className={styles.menuItemBtn}>
        <Icon name={EName.warning} />
        <span className={styles.menuItemTitle}>Пожаловаться</span>
      </button>
    ),
  },
].map(generateId);

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EName.menu} size={'menu'} />
          </button>
        }
      >
        <div className={styles.menuListContainer}>
          <ul className={styles.menuList}>
            <GenericList list={LIST} postId="123" />
          </ul>
          <MenuClose />
        </div>
      </Dropdown>
    </div>
  );
}
