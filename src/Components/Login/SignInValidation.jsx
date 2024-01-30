import * as Yup from 'yup';


const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .max(5, 'Must be 20 characters or less')
      .required('password is required'),

  });


  export default validationSchema;