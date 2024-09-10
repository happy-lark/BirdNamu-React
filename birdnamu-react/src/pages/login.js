import React, { useState } from 'react';
import '../assets/styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = './mp-first.html';
  };

  return (
    <div className="wrapper">
      <div id="logo">
        <img src="../data/img/icons/crow-solid.svg" alt="logo" />
      </div>
      
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-group" id="username">
          <label htmlFor="id">아이디 입력:</label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            placeholder="아이디를 입력하세요" 
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="input-group" id="pw">
          <label htmlFor="pw">비밀번호:</label>
          <input 
            type="password" 
            id="pw" 
            name="pw" 
            placeholder="비밀번호를 입력하세요" 
            minLength="8" 
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div id="button">
          <input type="submit" value="로그인" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
