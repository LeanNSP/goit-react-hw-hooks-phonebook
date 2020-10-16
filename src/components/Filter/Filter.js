import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { contactsActions } from "../../redux/contacts";

import s from "./Filter.module.css";
import "./animationFilter.css";

const Filter = ({ contacts, filter, theme }) => {
  const labelClass = theme === "light" ? s.label_light : s.label_dark;
  const inputClass = theme === "light" ? s.input_light : s.input_dark;

  const dispatch = useDispatch();

  return (
    <CSSTransition
      in={contacts.length > 0}
      classNames="Filter-slideIn"
      timeout={350}
      unmountOnExit
    >
      <label className={labelClass}>
        Find contacts by name
        <input
          className={inputClass}
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) =>
            dispatch(contactsActions.filterInputsChangeHandler(target.value))
          }
        />
      </label>
    </CSSTransition>
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Filter;
