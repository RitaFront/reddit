import React, { useEffect, useRef } from 'react';
import styles from './cardslist.scss';
import { Card } from './Card/Card';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export function CardsList() {
  const { data, loading, error, loadMoreCount } = useTypedSelector(
    (state) => state.posts
  );
  const bottomOfList = useRef<HTMLDivElement>(null);
  const { postsRequestAsync } = useActions();

  const { token } = useTypedSelector((state) => state.token);

  const handleClick = () => {
    postsRequestAsync(0);
  };

  useEffect(() => {
    if (token.length < 10) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadMoreCount < 2) {
          postsRequestAsync(loadMoreCount + 1);
        }
      },
      {
        rootMargin: '10px',
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, loadMoreCount]);

  return (
    <ul className={styles.cardList}>
      {data.length === 0 && !loading && !error && (
        <div style={{ textAlign: 'center' }}>
          Нет ни одного поста🥲
        </div>
      )}
      {data?.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
      <div ref={bottomOfList} />
      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка 🤫</div>
      )}
      {error && <div style={{ textAlign: 'center' }}>{error}</div>}
      {loadMoreCount === 2 && (
        <button
          disabled={loading}
          className={styles.loadMore}
          onClick={handleClick}
        >
          Загрузить еще
        </button>
      )}
    </ul>
  );
}
