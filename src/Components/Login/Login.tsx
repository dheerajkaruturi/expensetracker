import React, { useRef } from "react";
import styles from "./login.module.css";

const Login: React.FC = function () {
  const uidRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const loginButtonHandler = function (event: React.FormEvent) {
    event.preventDefault();

    const enteredUserId = uidRef.current!.value;

    const enteredPassword = passwordRef.current!.value;

    console.log(enteredUserId, enteredPassword);
  };
  return (
    <form onSubmit={loginButtonHandler}>
      <div className={styles.loginForm_container}>
        <div className={styles.loginForm}>
          <label htmlFor="userid">UserName</label>
          <div className={styles.input_wrapper}>
            <input type="email" id="userid" ref={uidRef} />
          </div>
          <label htmlFor="password">Password</label>
          <div className={styles.input_wrapper}>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
