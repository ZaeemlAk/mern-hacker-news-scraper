import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed. Try a different email.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} 
          onChange={e => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" value={password} 
          onChange={e => setPassword(e.target.value)} required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;