import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentForm.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';

interface ICommentFrom {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

interface MyFormValues {
  comment: string;
}

export const CommentForm = ({
  value,
  onChange,
  onSubmit,
}: ICommentFrom) => {
  // const [touched, setTouched] = useState(false);
  // const [valueError, setValueError] = useState('');
  // const validateValue = () => {
  //   if (value.length <= 3) return 'Введите больше 3-х символов';
  //   return '';
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   onSubmit(e);
  //   setTouched(true);
  //   setValueError(validateValue());

  //   const isFormValid = !validateValue();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена!');
  // };

  return (
    <Formik
      initialValues={{ comment: value }}
      enableReinitialize={true}
      validate={(values) => {
        // const errors = {
        //   comment: '',
        // };

        if (values.comment.length <= 3) {
          // errors.comment = 'Введите больше 3-х символов';
          // return errors;
          return { comment: 'Введите больше 3-х символов' };
        }
        return {};
      }}
      onSubmit={(values) => {
        console.log(1, values);
      }}
    >
      {(props) => (
        <Form className={styles.form}>
          <Field
            as="textarea"
            className={styles.textarea}
            onChange={onChange}
            value={value}
            name="comment"
            id="comment"
            onBlur={props.handleBlur}
          />
          {props.touched.comment && props.errors.comment && (
            <div>{props.errors.comment}</div>
          )}
          <button type="submit" className={styles.button}>
            Комментировать
          </button>
        </Form>
      )}
    </Formik>

    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <textarea
    //     className={styles.textarea}
    //     value={value}
    //     onChange={onChange}
    //     aria-invalid={valueError ? 'true' : undefined}
    //   ></textarea>
    //   {touched && valueError && <div>{valueError}</div>}
    //   <button type="submit" className={styles.button}>
    //     Комментировать
    //   </button>
    // </form>
  );
};
