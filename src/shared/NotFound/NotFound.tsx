import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './notFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={style.notFound}>
      <h1 className={style.notFound_title}>Ошибка 404</h1>
      <h3 className={style.notFound_descr}>
        Упс...К сожалению страница которую вы ищите не существует 😥
      </h3>
      <button
        className={style.notFound_btn}
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </div>
  );
};

export default NotFound;
