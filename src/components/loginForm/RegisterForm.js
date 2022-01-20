import React, { useState } from 'react';
import loginImage from '../../assets/assets-login.png';
import { School } from '@mui/icons-material';
import InputComponent from '../../common-components/InputComponent';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    loginId: '',
    password: '',
    confirmPass: '',
  });

  const [loginDetailsError, setLoginDetailsError] = useState({
    loginIdError: '',
    passwordError: '',
    confirmPassError: '',
  });

  //onchange method for login Inputs
  const onLoginDetailsChange = event => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  //Register Click
  const onRegisterClick = () => {};

  //Cancel Click
  const onCancelClick = () => {};

  const onLoginHereClick = () => {
    navigate('/login');
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
          <div className="login-header-text">Create Account</div>
          <p className="login-sub-text"></p>

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

          <InputComponent
            textValue={loginDetails.confirmPass}
            textName="confirmPass"
            onInputChange={onLoginDetailsChange}
            textLabel="Confirm Password"
            variant="outlined"
            errorMsg={loginDetailsError.confirmPassError}
            inputType="password"
            inputClass="password-input"
          />

          <button className="login-button" onClick={onRegisterClick}>
            Register
          </button>
          <button className="create-account-button" onClick={onCancelClick}>
            Cancel
          </button>

          <p className="login-sub-text">
            Already have an account?{' '}
            <span className="login-here-text" onClick={onLoginHereClick}>
              Login Here
            </span>
          </p>
          {/* {showLoginForm && this.displayLoginForm()}
          {!showLoginForm && showSecurityForm && this.displaySecurityForm()}
          {!showLoginForm && !showSecurityForm && showChangePassForm && this.displayChangePasswordForm()} */}
        </div>
      </div>
    </div>
  );
}
