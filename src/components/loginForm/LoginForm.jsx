import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Вход</button>
      <Link to="/registration">Регистрация</Link>
    </form>
  );
}

export default LoginForm;
