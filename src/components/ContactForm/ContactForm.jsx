import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'; // Assuming you have a contacts slice

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters'),
    number: Yup.string()
      .required('Required')
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must not exceed 50 characters'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    // Dispatch the addContact action with the new contact
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <div>
            <label className={style.label} htmlFor="name">Name</label>
            <Field className={style.input} type="text" id="name" name="name" />
            <ErrorMessage className={style.errorMessage} name="name" component="div" />
          </div>
          <div>
            <label className={style.label} htmlFor="number">Number</label>
            <Field className={style.input} type="text" id="number" name="number" />
            <ErrorMessage className={style.errorMessage} name="number" component="div" />
          </div>
          <button className={style.button} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
