import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import RegisterForm from "./RegisterForm";

import { authOperation } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const updName = ({ value }) => setName(value);

  const [email, setEmail] = useState("");
  const updEmail = ({ value }) => setEmail(value);

  const [password, setPassword] = useState("");
  const updPassword = ({ value }) => setPassword(value);

  const theme = useSelector(themeSelectors.getTheme);

  const dispatch = useDispatch();

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    authOperation.register({ name, email, password }, dispatch);

    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      theme={theme}
      onSubmit={handlerSubmit}
      onNameChange={updName}
      onEmailChange={updEmail}
      onPasswordChange={updPassword}
    />
  );
}
