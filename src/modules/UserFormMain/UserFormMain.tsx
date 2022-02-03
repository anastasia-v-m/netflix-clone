import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';

import api from '../api/endpoints';

import internalData from './data';

import './userFormMain.scss';

export default function UserFormMain(): JSX.Element {
  const formData = { email: '', isEmailValid: false, password: '', isPasswordValid: false };
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [formDataState, setFormData] = useState(formData);
  const navigator = useNavigate();

  const submitHandle = async (e: SyntheticEvent) => {
    e.preventDefault();
    const reqData = {
      email: formDataState.email,
      password: formDataState.password,
    };
    if (formDataState.isEmailValid && formDataState.isPasswordValid) {
      setErrorPrefix(false);
      try {
        const { data: loginData } = await api.login(reqData);
        sessionStorage.setItem('user', JSON.stringify(loginData.user));
        navigator('/private-page');
      } catch (err: any) {
        if (err.response.status === 422) {
          Object.keys(err.response.data.errors).forEach((key) => console.error(err.response.data.errors[key]));
        }
      }
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
      <h2 className="form-title">{internalData.title}</h2>
      <div className={`form-invalid-data ${errorPrefix}`}>{internalData.invalid}</div>
      <form className="user-form" method="POST" onSubmit={submitHandle}>
        <LoginUser update={updateValues} />
        <PasswordUser update={updateValues} />
        <button className="user-form__button" type="submit">
          {internalData.title}
        </button>
        <div className="user-form__help">
          <div className="remember-me__wrapper">
            <input className="remember-me__input" type="checkbox" id="remember-me__id" />
            <label className="remember-me__label" htmlFor="remember-me__id">
              <span className="remember-me__span">{internalData.span}</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
