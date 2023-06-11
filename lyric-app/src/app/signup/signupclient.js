"use client";

import { useState } from 'react';
import styles from './signupclient.module.css'
import submitUser from './signupserver'

export default function SignUpClient() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  const [errMessage, setErrMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = submitUser(formData)
    setErrMessage(message)
    setFormData({ ...formData, password: '' });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="text"
            id="firstName"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.button} type="submit">Sign Up</button>
        <h3>{errMessage}</h3>
      </form>
    </div>
  );
}