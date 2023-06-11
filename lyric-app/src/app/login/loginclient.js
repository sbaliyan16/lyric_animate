"use client";

import { useState } from 'react';
import styles from './loginclient.module.css'
import loginUser from './loginserver'

export default function LoginClient() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errMessage, setErrMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = loginUser(formData)
    setErrMessage(message)
    setFormData({ ...formData, password: '' });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
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
        <button className={styles.button} type="submit">Login</button>
        <h3>{errMessage}</h3>
      </form>
    </div>
  );
}