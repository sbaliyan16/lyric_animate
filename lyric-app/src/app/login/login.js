// import { useState } from 'react';
import styles from './login.module.css'


export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic
//     // You can perform authentication, API calls, or any other necessary actions here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

  return (
    <div>
      <form className={styles.form}>

        <div className={styles.inputs}>
            <input
            type="text"
            id="username"
            placeholder="username"
            // value={username}
            // onChange={handleUsernameChange}
            />

            <input
            type="password"
            id="password"
            placeholder="password"
            // value={password}
            // onChange={handlePasswordChange}
            />
        </div>
        

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}
