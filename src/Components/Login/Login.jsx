import React, { useState ,useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import imgSrc from '../../images/uq.png'
import validationSchema from './SignInValidation';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initialValues={
    email:"",
    password:""
  }
 
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/main/organization');
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur,isSubmitting }) => (
    <Form   className="w-full flex flex-col justify-center items-center space-y-3 pt-5">
        <div className='pt-5 h-1/2'>
            <img src={imgSrc} alt="" className='w-[12rem] h-[12-rem]' />
        </div>
        <div className='flex flex-wrap w-1/3'>
            <label htmlFor="email" className='w-1/6 p-2 text-sm' >Email: </label>
      <Field
        type="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
        className="px-4 py-2 border border-gray-300 rounded-xl w-5/6 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm ml-4 w-1/2 p-1"/>
      </div>

      <div className='flex flex-wrap w-1/3'>
      <label htmlFor="password" className='w-1/6 p-2 text-sm'>Password: </label>
      <Field
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id='password'
        placeholder="Password"
        className="px-4 py-2 border border-gray-300 rounded-xl w-5/6 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
       <ErrorMessage name="password" component="div" className="text-red-500 text-sm w-1/2 p-1 ml-4 "/>
      </div>
     
      <button
        type="submit"
        onClick={navigateHome}
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 w-[33rem]"
      >
        Login
      </button>

      <div className='flex justify-between w-[33rem]'>
        <div>
      <a href="#" className="text-sm underline hover:no-underline">Forgot Password?</a>
      </div>
      <div className='text-sm'>don't have an account <a href="#" className='underline hover:no-underline'>Create an account</a> </div>
      </div>

    </Form>
    )}
  </Formik>

  );
}

export default LoginForm;