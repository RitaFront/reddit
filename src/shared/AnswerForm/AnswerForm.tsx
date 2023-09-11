import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './answerForm.scss';

export const AnswerForm = ({ author }: any) => {
  const [valueAnswer, setValueAnswer] = useState(`${author}, `);
  const [commentAdd, setCommentAdd] = useState(false);
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCommentAdd(true);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={ref}
        className={styles.input}
        value={valueAnswer}
        onChange={(e) => setValueAnswer(e.target.value)}
      ></textarea>
      <button className={styles.btn} type="submit">
        Ответить
      </button>
    </form>
  );
};
