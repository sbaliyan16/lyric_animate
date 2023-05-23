// import { useState } from 'react';
import styles from './signup.module.css'


export default function SignUp() {
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
          id="first_name"
          placeholder="first name"
          />

          <input
          type="text"
          id="last_name"
          placeholder="last name"
          />

          <input
          type="text"
          id="username"
          placeholder="set username"
          // value={username}
          // onChange={handleUsernameChange}
          />

          <input
          type="password"
          id="password"
          placeholder="set password"
          // value={password}
          // onChange={handlePasswordChange}
          />
        </div>
        

        <button className={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
