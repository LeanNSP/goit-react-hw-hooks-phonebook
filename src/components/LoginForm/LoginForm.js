import React from "react";
import PropTypes from "prop-types";

import s from "./LoginForm.module.css";

const LoginForm = ({
  email,
  password,
  theme,
  onSubmit,
  onEmailChange,
  onPasswordChange,
}) => {
  const labelClass = theme === "light" ? s.label_light : s.label_dark;
  const inputClass = theme === "light" ? s.input_light : s.input_dark;
  const initBtnClasses = [s.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, s.button_light]
      : [...initBtnClasses, s.button_dark];

  return (
    <form className={s.form} onSubmit={onSubmit}>
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
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
};

export default LoginForm;
