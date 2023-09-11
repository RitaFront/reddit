import React, { useEffect, useState } from 'react';
import { IComments } from '../../interfaces/postComments.interface';
import { CommentItem } from './CommentItem.tsx';
import styles from './commentsBlock.scss';

interface ICommentsBlock {
  comments: IComments[];
}

export const CommentsBlock = (props: ICommentsBlock) => {
  return (
    <div>
      <ul className={styles.commentsList}>
        {props.comments.map((comment, i) => {
          return (
            <CommentItem
              key={i}
              comment={comment.comment}
              author={comment.author}
              created={comment.created}
              children={comment.children}
            />
          );
        })}
      </ul>
    </div>
  );
};
