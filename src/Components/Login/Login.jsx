import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgSrc from '../../images/uq.png'



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/main/organization');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  const handleOnChangeEmail = (e) =>{
    setEmail(e.target.value)

    let emailErrorMsg = document.getElementById("emailErrorMsg");
    let email = document.getElementById("email");
    if(e.target.value != ""){

        emailErrorMsg.style.visibility = 'hidden';
        email.style.borderColor  = "grey"
    }
  }
  const LoseFocusEmail = (e)=>{

  
    let emailErrorMsg = document.getElementById("emailErrorMsg");
    let email = document.getElementById("email");

    if(e.target.value == "")
    {

        emailErrorMsg.style.visibility = 'visible';
        email.style.borderColor  = "red"
    }
    else{

        emailErrorMsg.style.visibility = 'hidden';
        email.style.borderColor  = "grey"
    }
  }

  const handleOnChangePassword = (e) =>{
    setPassword(e.target.value)

    let passwordErrorMsg = document.getElementById("passwordErrorMsg");
    let password = document.getElementById("password");
    if(e.target.value != ""){

        passwordErrorMsg.style.visibility = 'hidden';
        password.style.borderColor  = "grey"
    }
  }
  const LoseFocusPassword = (e)=>{

    let passwordErrorMsg = document.getElementById("passwordErrorMsg");
    let password = document.getElementById("password");

    if(e.target.value == "")
    {

        passwordErrorMsg.style.visibility = 'visible';
        password.style.borderColor  = "red"
    }
    else{

        passwordErrorMsg.style.visibility = 'hidden';
        password.style.borderColor  = "grey"
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center space-y-3 pt-5">
        <div className='pt-5 h-1/2'>
            <img src={imgSrc} alt="" className='w-[12rem] h-[12-rem]' />
        </div>
        <div className='flex flex-wrap w-1/3'>
            <label htmlFor="" className='w-1/6 p-2 text-sm' >Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleOnChangeEmail}
        
        onBlur={LoseFocusEmail}
        placeholder="Email"
        className="px-4 py-2 border border-gray-300 rounded-xl w-5/6 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
           <p className='w-1/2 p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Email is required</p>
      </div>

      <div className='flex flex-wrap w-1/3'>
      <label htmlFor="" className='w-1/6 p-2 text-sm'>Password: </label>
      <input
        type="password"
        value={password}
        onChange={handleOnChangePassword}
        onBlur={LoseFocusPassword}
        id='password'
        placeholder="Password"
        className="px-4 py-2 border border-gray-300 rounded-xl w-5/6 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <p className='w-3/5 p-1 ml-1 text-sm text-[red] invisible' id='passwordErrorMsg'>Password is required</p>
      </div>
     
      <button
        type="submit"
        onClick={navigateHome}
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

    </form>
  );
}

export default LoginForm;