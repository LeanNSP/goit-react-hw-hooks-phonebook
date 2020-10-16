import React from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import { authOperation } from "../../redux/auth";

import s from "./UserMenu.module.css";
import "./animationUserMenu.css";

const UserMenu = ({ name, theme }) => {
  const spanClass = theme === "light" ? s.span_light : s.span_dark;
  const initBtnClasses = [s.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, s.button_light]
      : [...initBtnClasses, s.button_dark];

  const dispatch = useDispatch();

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="UserMenu-slideIn"
      timeout={450}
      unmountOnExit
    >
      <div className={s.wrapper}>
        <span className={spanClass}>Welcome, {name}</span>
        <button
          className={btnClasses.join(" ")}
          type="button"
          onClick={() => authOperation.logOut(dispatch)}
        >
          Logout
        </button>
      </div>
    </CSSTransition>
  );
};

UserMenu.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

export default UserMenu;
