import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { usePostComments } from '../../hooks/usePostComments';
import { CommentsBlock } from './CommentsBlock';
import { CommentFormContainer } from '../CommentFromContainer';
import { useNavigate, useParams } from 'react-router-dom';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const [isComments, setIsComments] = useState(false);
  const postId = useParams();

  const navigate = useNavigate();
  const comments: any = usePostComments(postId.id!);
  const modal = document.getElementById('modal_root');

  if (!modal) return null;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        navigate('/');
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (comments) {
      setIsComments(true);
    }
  }, [isComments]);

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>Заголовок</h2>
      <div className={styles.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur quisquam magnam nisi iure cumque totam ratione
          quae, dignissimos consequuntur possimus officiis sint enim
          in fugiat porro magni itaque, eius repellat!Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur
          quisquam magnam nisi iure cumque totam ratione quae,
          dignissimos consequuntur possimus officiis sint enim in
          fugiat porro magni itaque, eius repellat!Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur quisquam
          magnam nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur quisquam magnam
          nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur quisquam magnam
          nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur quisquam magnam
          nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur quisquam magnam nisi iure cumque totam ratione
          quae, dignissimos consequuntur possimus officiis sint enim
          in fugiat porro magni itaque, eius repellat!Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur
          quisquam magnam nisi iure cumque totam ratione quae,
          dignissimos consequuntur possimus officiis sint enim in
          fugiat porro magni itaque, eius repellat!Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur quisquam
          magnam nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur quisquam magnam
          nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur quisquam magnam
          nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur quisquam magnam nisi iure cumque totam ratione
          quae, dignissimos consequuntur possimus officiis sint enim
          in fugiat porro magni itaque, eius repellat!Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur
          quisquam magnam nisi iure cumque totam ratione quae,
          dignissimos consequuntur possimus officiis sint enim in
          fugiat porro magni itaque, eius repellat!Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Consequatur quisquam
          magnam nisi iure cumque totam ratione quae, dignissimos
          consequuntur possimus officiis sint enim in fugiat porro
          magni itaque, eius repellat!v
        </p>
      </div>
      <CommentFormContainer />
      {isComments && <CommentsBlock comments={comments} />}
    </div>,
    modal
  );
}
