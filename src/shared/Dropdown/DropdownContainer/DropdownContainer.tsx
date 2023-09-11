import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownContainer.scss';

interface IDropdownContainer {
  children: React.ReactNode;
  onClick: (isDropdownOpen: boolean) => void;
}

export const DropdownContainer = ({
  children,
  onClick,
}: IDropdownContainer) => {
  const dropdown = document.getElementById('dropdown_root');
  if (!dropdown) return null;

  return ReactDOM.createPortal(
    <div className={styles.listContainer}>
      <div className={styles.list} onClick={() => onClick(false)}>
        {children}
      </div>
    </div>,
    dropdown
  );
};
