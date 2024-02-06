import React, { useState } from 'react';
import '../assets/css/signup.css'; // Import CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleSignup = () => {
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      role.trim() === '' ||
      mobileNumber.trim() === '' ||
      country.trim() === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // You can add your signup logic here
    console.log('Signing up with:', email, password, confirmPassword, role, mobileNumber, country);
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.length < 6) {
      setPasswordStrength('Weak');
    } else if (val.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className={`password-strength ${passwordStrength.toLowerCase()}`}>
          {passwordStrength && `Password Strength: ${passwordStrength}`}
        </span>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
