import React from 'react';
// import styles from './genericlist.scss';

interface IItem {
  id: string;
  onClick: (id: string) => void;
  className?: any;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  children?: React.ReactNode;
}

interface IGenericListProps {
  list: IItem[];
  postId: string;
}

export function GenericList({ list, postId }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({ As = 'div', onClick, className, id, href, children }) => (
          <As
            className={className}
            onClick={() => console.log(postId)}
            key={id}
            href={href}
          >
            {children}
          </As>
        )
      )}
    </>
  );
}
