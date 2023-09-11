import React, { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { CommentForm } from '../CommentForm';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const CommentFormContainer = () => {
  const { commentText } = useTypedSelector((state) => state.comment);
  const { changeComment } = useActions();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    changeComment(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(commentText);
  };

  return (
    <CommentForm
      value={commentText}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
