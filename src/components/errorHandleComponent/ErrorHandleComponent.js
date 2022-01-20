import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorHandleComponent() {
  const navigate = useNavigate();
  const onUrlClick = () => {
    navigate('/login');
    window.location.reload();
  };
  return (
    <div className="error-handle-main">
      Oops... you ended at wrong place.
      <br />
      Please
      <span onClick={onUrlClick} className="login-text">
        Login
      </span>
      in application.
    </div>
  );
}
