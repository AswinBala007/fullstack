import React, { useState } from 'react';
import '../assets/css/login.css'; // Import CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please provide both username and password.');
      return;
    }
    // You can add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to BritEngCert</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin}>Login</button>
        <Link to="/signup" className="signup-link">Dont have an account? Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;
