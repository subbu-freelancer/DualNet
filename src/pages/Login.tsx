import { FunctionComponent } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.header}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.main}>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.form}>
          <div className={styles.loginButton}>
            <img
              className={styles.loginButtonChild}
              alt=""
              src="/rectangle-1.svg"
            />
            <div className={styles.logIn}>log in</div>
          </div>
          <div className={styles.email}>
            <div className={styles.enterYourEMail}>Enter your E-Mail</div>
            <input type="email" className={styles.emailInput} />
          </div>
          <div className={styles.password}>
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            <div className={styles.passwordChild} />
            <div className={styles.div}>**************</div>
            <div className={styles.enterYourPassword}>Enter your Password</div>
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
        </div>
        <div className={styles.title}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.dualnetClient}>Dualnet Client</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
