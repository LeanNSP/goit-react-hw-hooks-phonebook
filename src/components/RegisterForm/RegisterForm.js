import React from "react";
import PropTypes from "prop-types";

import styles from "./RegisterForm.module.css";

const RegisterForm = ({
  name,
  email,
  password,
  theme,
  onSubmit,
  onNameChange,
  onEmailChange,
  onPasswordChange,
}) => {
  const labelClass = theme === "light" ? styles.label_light : styles.label_dark;
  const inputClass = theme === "light" ? styles.input_light : styles.input_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={labelClass}>
        Name
        <input
          className={inputClass}
          type="text"
          placeholder="Enter name"
          name="name"
          required
          value={name}
          onChange={({ target }) => onNameChange(target)}
        />
      </label>
      <label className={labelClass}>
        E-mail
        <input
          className={inputClass}
          type="email"
          placeholder="Enter e-mail"
          name="email"
          required
          value={email}
          onChange={({ target }) => onEmailChange(target)}
        />
      </label>
      <label className={labelClass}>
        Password
        <input
          className={inputClass}
          type="password"
          placeholder="Enter password"
          name="password"
          required
          value={password}
          onChange={({ target }) => onPasswordChange(target)}
        />
      </label>
      <button className={btnClasses.join(" ")} type="submit">
        Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
};

export default RegisterForm;
