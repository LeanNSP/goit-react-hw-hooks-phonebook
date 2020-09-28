import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import LoginForm from "./LoginForm";

import { authOperation } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

export default function LoginFormContainer() {
  const [email, setEmail] = useState("");
  const updEmail = ({ value }) => setEmail(value);

  const [password, setPassword] = useState("");
  const updPassword = ({ value }) => setPassword(value);

  const theme = useSelector(themeSelectors.getTheme);

  const dispatch = useDispatch();

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    authOperation.logIn({ email, password }, dispatch);

    clearForm();
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <LoginForm
      email={email}
      password={password}
      theme={theme}
      onSubmit={handlerSubmit}
      onEmailChange={updEmail}
      onPasswordChange={updPassword}
    />
  );
}
