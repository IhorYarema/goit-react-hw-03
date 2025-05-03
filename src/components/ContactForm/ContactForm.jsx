import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Max 50 symbols')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Max 50 symbols')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Enter name"
          />{' '}
          <ErrorMessage name="name" component="div" className={css.error} />
          <label className={css.label} htmlFor="name">
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="Enter phone number"
          />{' '}
          <ErrorMessage name="number" component="div" className={css.error} />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </fieldset>
      </Form>
    </Formik>
  );
}
