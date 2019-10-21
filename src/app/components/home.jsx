import React from 'react';
import { loginFromGoogle } from '../redux/actions/login';
import '../styles/home.scss';

const home = () => (
  <div className="home">
    <div className="home-container">
      <h1 className="welcome-message">Welcome</h1>
      <h1 className="welcome-description">
        Chat in Real Time.
        <mark> Find Your Friends</mark>
        <br />
        and Have a
        <mark>Good Time</mark>
        .
      </h1>
      <h4 className="google-account">
        Continue with your
        <button type="button" onClick={loginFromGoogle}><u>Google Account</u></button>
      </h4>
    </div>
    <div className="circle-1" />
    <div className="circle-2" />
    <div className="circle-3" />
    <div className="circle-4" />
    <div className="circle-5" />
    <div className="circle-6" />
  </div>
);

export default home;
