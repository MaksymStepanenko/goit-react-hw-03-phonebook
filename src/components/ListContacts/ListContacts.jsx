import React from 'react';
import PropTypes from 'prop-types';
import css from './ListContacts.module.css'

export const ListContacts = ({ state, deleteContact }) => {
  return (
    <ul className={css.ulwrap}>
      {state.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.list}>
            <p>
              {name} : {number}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  deleteContact: PropTypes.func,
  state: PropTypes.array,
  number: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
