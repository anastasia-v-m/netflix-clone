import React, { SyntheticEvent, useState } from 'react';

import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';

import data from './data';

import './userFormMain.scss';

export default function UserFormMain(): JSX.Element {
  const formData = { email: '', isEmailValid: false, password: '', isPasswordValid: false };
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [formDataState, setFormData] = useState(formData);

  const submitHandle = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (formDataState.isEmailValid && formDataState.isPasswordValid) {
      setErrorPrefix(false);
    } else {
      setErrorPrefix(true);
    }
  };

  const updateValues = (value: string, isValid: boolean, isEmail: boolean) => {
    if (isEmail) {
      formDataState.email = value;
      formDataState.isEmailValid = isValid;
      setFormData(formDataState);
    } else {
      formDataState.password = value;
      formDataState.isPasswordValid = isValid;
      setFormData(formDataState);
    }
  };

  const errorPrefix = errorPrefixStatus ? 'active' : '';

  return (
    <div className="user-form__main">
      <h2 className="form-title">{data.title}</h2>
      <div className={`form-invalid-data ${errorPrefix}`}>{data.invalid}</div>
      <form className="user-form" method="POST" onSubmit={submitHandle}>
        <LoginUser update={updateValues} />
        <PasswordUser update={updateValues} />
        <button className="user-form__button" type="submit">
          {data.title}
        </button>
        <div className="user-form__help">
          <div className="remember-me__wrapper">
            <input className="remember-me__input" type="checkbox" id="remember-me__id" />
            <label className="remember-me__label" htmlFor="remember-me__id">
              <span className="remember-me__span">{data.span}</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
