import React, { useState } from 'react';
import loginImage from '../../assets/assets-login.png';
import { School } from '@mui/icons-material';
import InputComponent from '../../common-components/InputComponent';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    loginId: '',
    password: '',
  });

  const [loginDetailsError, setLoginDetailsError] = useState({
    loginIdError: '',
    passwordError: '',
  });

  //onchange method for login Inputs
  const onLoginDetailsChange = event => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  //Login Click
  const onLoginClick = () => {};

  const onRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="university-login-details">
      <div className="university-heading">
        <School className="university-icon" />
        <h2 className="university-text">University Domain</h2>
      </div>
      <div className="university-image-form">
        <img src={loginImage} className="university-login-img" alt="loginImage" />
        <div className="login-details-form">
          <div className="login-header-text">Welcome Back :)</div>
          <p className="login-sub-text">
            To keep connected please login with your personal information
            <br /> by email address and password
          </p>

          <InputComponent
            textValue={loginDetails.loginId}
            textName="loginId"
            onInputChange={onLoginDetailsChange}
            textLabel="Email"
            variant="outlined"
            errorMsg={loginDetailsError.loginIdError}
            inputClass="loginId-input"
          />

          <InputComponent
            textValue={loginDetails.password}
            textName="password"
            onInputChange={onLoginDetailsChange}
            textLabel="Password"
            variant="outlined"
            errorMsg={loginDetailsError.passwordError}
            inputType="password"
            inputClass="password-input"
          />

          <button className="login-button" onClick={onLoginClick}>
            Login Now
          </button>
          <button className="create-account-button" onClick={onRegisterClick}>
            Create Account
          </button>
          {/* {showLoginForm && this.displayLoginForm()}
          {!showLoginForm && showSecurityForm && this.displaySecurityForm()}
          {!showLoginForm && !showSecurityForm && showChangePassForm && this.displayChangePasswordForm()} */}
        </div>
      </div>
    </div>
  );
}
