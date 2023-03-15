import { FunctionComponent } from "react";
import React, { useState } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email: string) => {
    // regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    // regular expression for password validation
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (event: any) => {
    // Run validations when the form is submitted

    console.log("Form is being submitted");
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Please enter a password with at least 8 characters, including\
         atleast one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    // submit form
    alert("Form successfully submitted.");
  };

  return (
    // Login component
    <div className={styles.login}>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.header}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>

      // Main component
      <div className={styles.main}>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.title}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.dualnetClient}>Dualnet Client</div>
        </div>
        <div className={styles.form}>
          <div className={styles.email}>
            <div className={styles.enterYourEMail}>Enter your E-Mail</div>
            <input
              type="email"
              className={styles.emailInput}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className={styles.emailChild} />
          </div>
          <div className={styles.password}>
            <div className={styles.passwordChild} />
            <div className={styles.enterYourPassword}>Enter your Password</div>
            <img
              className={styles.passwordEyeIcon}
              alt="Toggle password visibility"
              src="/image-5@2x.png"
              onClick={() => {
                console.log("Toggle password visibility");
                toggleShowPassword();
              }}
              style={{ zIndex: 1 }}
            />
            <input
              type={showPassword ? "text" : "password"}
              className={styles.passwordInput}
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className={styles.loginDemoOrCreateAnAccounWrapper}>
            <div className={styles.loginDemoOrContainer}>
              {`Login Demo or `}
              <a
                className={styles.createAnAccount}
                href="https://app.metaapi.cloud/sign-up"
                target="_blank"
              >
                <span className={styles.createAnAccount1}>
                  Create an account
                </span>
              </a>
            </div>
          </div>
          <div className={styles.loginButton} onClick={handleSubmit}>
            <img
              className={styles.loginButtonChild}
              alt=""
              src="/rectangle-1.svg"
            />
            <div className={styles.logIn}>log in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
