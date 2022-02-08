import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';
import RegistrationNames from '../RegistrationNames';

import { login, registration } from './api/requests';

import internalData from './data';
import LoadingSVG from './svg/LoadingSVG';
import { IError, ILoginData, ILoginResp, IRegData } from './types';

import './userFormMain.scss';

export default function UserFormMain(props: any): JSX.Element {
  const formData = { email: '', isEmailValid: false, password: '', isPasswordValid: false };
  const userNameData = { firstName: '', secondName: '' };
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [formDataState, setFormData] = useState(formData);
  const [userNameDataState, setUserName] = useState(userNameData);
  const [isLoading, setLoading] = useState(false);
  const navigator = useNavigate();

  const loginUser = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const loginData: ILoginData = {
      email: formDataState.email,
      password: formDataState.password,
    };
    if (formDataState.isEmailValid && formDataState.isPasswordValid) {
      setErrorPrefix(false);
      try {
        const { data: loginResp }: { data: ILoginResp } = await login(loginData);
        sessionStorage.setItem('user', JSON.stringify(loginResp.user));
        setLoading(false);
        navigator('/private-page');
      } catch (err) {
        if ((err as IError).response.status === 422) {
          setErrorPrefix(true);
          setLoading(false);
          Object.keys((err as IError).response.data.errors).forEach((key, ind) =>
            console.error((err as IError).response.data.errors[ind]),
          );
        }
      }
    } else {
      setErrorPrefix(true);
    }
  };

  const regUser = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const regData: IRegData = {
      email: formDataState.email,
      password: formDataState.password,
      firstName: userNameDataState.firstName,
      lastName: userNameDataState.secondName,
    };

    if (formDataState.isEmailValid && formDataState.isPasswordValid) {
      setErrorPrefix(false);
      try {
        await registration(regData);
        const { data: loginData } = await login(regData);
        sessionStorage.setItem('user', JSON.stringify(loginData.user));
        setLoading(false);
        navigator('/private-page');
      } catch (err) {
        if ((err as IError).response.status === 422) {
          setErrorPrefix(true);
          setLoading(false);
          Object.keys((err as IError).response.data.errors).forEach((key, index) =>
            console.error((err as IError).response.data.errors[index]),
          );
        }
      }
    }
  };

  const updateValues = (value: string, isValid: boolean, isEmail: boolean): void => {
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

  const updateUserName = (value: string, isFirstName: boolean): void => {
    if (isFirstName) {
      userNameDataState.firstName = value;
      setUserName(userNameDataState);
    } else {
      userNameDataState.secondName = value;
      setUserName(userNameDataState);
    }
  };

  const errorPrefix = errorPrefixStatus ? 'active' : '';
  const loadingPrefix = isLoading ? 'active' : '';

  if (props.reg) {
    return (
      <div className="user-form__main">
        <h2 className="form-title">{internalData.regTitle}</h2>
        <div className={`form-invalid-data ${errorPrefix}`}>{internalData.regError}</div>
        <form className="user-form" method="POST" onSubmit={regUser}>
          <RegistrationNames update={updateUserName} />
          <LoginUser update={updateValues} />
          <PasswordUser update={updateValues} />
          <button className="user-form__button" type="submit">
            {internalData.regTitle}
          </button>
          <div className="user-form__help">
            <div className="remember-me__wrapper">
              <input className="remember-me__input" type="checkbox" id="remember-me__id" />
              <label className="remember-me__label" htmlFor="remember-me__id">
                <span className="remember-me__span">{internalData.span}</span>
              </label>
            </div>
            <Link className="login-form__link" to="/login-form">
              {internalData.loginLinkTitle}
            </Link>
          </div>
          <LoadingSVG prefix={loadingPrefix} />
        </form>
      </div>
    );
  }

  return (
    <div className="user-form__main">
      <h2 className="form-title">{internalData.loginTitle}</h2>
      <div className={`form-invalid-data ${errorPrefix}`}>{internalData.invalid}</div>
      <form className="user-form" method="POST" onSubmit={loginUser}>
        <LoginUser update={updateValues} />
        <PasswordUser update={updateValues} />
        <button className="user-form__button" type="submit">
          {internalData.loginTitle}
        </button>

        <div className="user-form__help">
          <div className="remember-me__wrapper">
            <input className="remember-me__input" type="checkbox" id="remember-me__id" />
            <label className="remember-me__label" htmlFor="remember-me__id">
              <span className="remember-me__span">{internalData.span}</span>
            </label>
          </div>
          <Link className="registration-form__link" to="/registration">
            {internalData.regLinkTitle}
          </Link>
        </div>
        <LoadingSVG prefix={loadingPrefix} />
      </form>
    </div>
  );
}
