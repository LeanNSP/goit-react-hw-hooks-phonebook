import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { errorAction } from "../../redux/error";

import s from "./NotifyError.module.css";

const NotifyError = ({ isError, theme }) => {
  const notifyClass = theme === "light" ? s.notify_light : s.notify_dark;

  const dispatch = useDispatch();

  return (
    <div className={notifyClass} theme={theme}>
      <p>{isError}</p>
      <button
        type="button"
        onClick={() => dispatch(errorAction.closeNotifyError())}
      >
        OK
      </button>
    </div>
  );
};

NotifyError.propTypes = {
  theme: PropTypes.string.isRequired,
  isError: PropTypes.string,
};

export default NotifyError;
