import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/loginForm/RegisterForm';
import ErrorHandleComponent from './components/errorHandleComponent/ErrorHandleComponent';

function App() {
  const urlPath = window.location.pathname;
  let isFlag = 0;
  if (urlPath === '/register' || urlPath === '/login' || urlPath === '/' || urlPath === '/subscription') {
    isFlag = 1;
  }
  return (
    <div className="App">
      <BrowserRouter>
        {isFlag === 1 ? (
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={urlPath} element={<ErrorHandleComponent />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
