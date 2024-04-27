import { useState } from "react";
import "./PersonalInformation.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const navigate = useNavigate();

  const [eyeOpened, setEyeOpened] = useState(false);

  const logoutHandler = () => {
    navigate("/login");
  };

  const eyeHandler = () => {
    setEyeOpened(!eyeOpened);

    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  return (
    <div className='personal-info-container'>
      <div className='input-box'>
        <label htmlFor='Name'>Name:</label>
        <input type='text' />
      </div>
      <div className='input-box'>
        <label htmlFor='Email'>Email:</label>
        <input type='email' disabled={true} />
      </div>
      <div className='password-box'>
        <label htmlFor='Passoword'>Password:</label>
        <input type='password' id='password' />
        {eyeOpened ? (
          <FaRegEye onClick={eyeHandler} />
        ) : (
          <FaRegEyeSlash onClick={eyeHandler} />
        )}
      </div>
      <button type='submit' className='button-27'>
        Save
      </button>
    </div>
  );
};

export default PersonalInformation;
