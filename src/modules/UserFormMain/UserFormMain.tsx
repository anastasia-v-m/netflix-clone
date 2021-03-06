import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';
import RegistrationNames from '../RegistrationNames';
import { AppContext } from '../../components/constants';

import { login, registration } from './api/requests';

import data from './data';
import LoadingSVG from '../../assets/LoadingSVG';
import { IError, ILoginData, ILoginResp, IRegData, IUserFormProps } from './types';

import store from '../../store/store';

import './userFormMain.scss';

const initialFormData = { email: '', isEmailValid: false, password: '', isPasswordValid: false };
const initialUserNameData = { firstName: '', secondName: '' };

export default function UserFormMain(props?: IUserFormProps): JSX.Element {
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [formDataState, setFormData] = useState(initialFormData);
  const [userNameDataState, setUserName] = useState(initialUserNameData);
  const [isLoading, setLoading] = useState(false);

  const navigator = useNavigate();

  const { reg } = props as IUserFormProps;

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
        store.dispatch({ type: 'HAS_LOGED_IN', value: 'Выйти', isDone: true });
        setLoading(false);
        navigator('/announces');
      } catch (err) {
        if ((err as IError).response.status === 422) {
          setErrorPrefix(true);
          setLoading(false);
          Object.keys((err as IError).response.data.errors).forEach((key, ind) =>
            // eslint-disable-next-line no-console
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
        store.dispatch({ type: 'HAS_LOGED_IN', value: 'Выйти', isDone: true });
        setLoading(false);
        navigator('/announces');
      } catch (err) {
        if ((err as IError).response.status === 422) {
          setErrorPrefix(true);
          setLoading(false);
          Object.keys((err as IError).response.data.errors).forEach((key, index) =>
            // eslint-disable-next-line no-console
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

  if (reg) {
    return (
      <AppContext.Consumer>
        {(context): JSX.Element => (
          <div className="user-form__main">
            <h2 className="form-title">{data[context.locale].regTitle}</h2>
            <div className={`form-invalid-data ${errorPrefix}`}>{data[context.locale].regError}</div>
            <form className="user-form" method="POST" onSubmit={regUser}>
              <RegistrationNames update={updateUserName} />
              <LoginUser update={updateValues} />
              <PasswordUser update={updateValues} />
              <button className="user-form__button" type="submit">
                {data[context.locale].regTitle}
              </button>
              <div className="user-form__help">
                <div className="remember-me__wrapper">
                  <input className="remember-me__input" type="checkbox" id="remember-me__id" />
                  <label className="remember-me__label" htmlFor="remember-me__id">
                    <span className="remember-me__span">{data[context.locale].span}</span>
                  </label>
                </div>
                <Link className="login-form__link" to="/login-form">
                  {data[context.locale].loginLinkTitle}
                </Link>
              </div>
              <LoadingSVG prefix={loadingPrefix} />
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }

  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <div className="user-form__main">
          <h2 className="form-title">{data[context.locale].loginTitle}</h2>
          <div className={`form-invalid-data ${errorPrefix}`}>{data[context.locale].invalid}</div>
          <form className="user-form" method="POST" onSubmit={loginUser}>
            <LoginUser update={updateValues} />
            <PasswordUser update={updateValues} />
            <button className="user-form__button" type="submit">
              {data[context.locale].loginTitle}
            </button>

            <div className="user-form__help">
              <div className="remember-me__wrapper">
                <input className="remember-me__input" type="checkbox" id="remember-me__id" />
                <label className="remember-me__label" htmlFor="remember-me__id">
                  <span className="remember-me__span">{data[context.locale].span}</span>
                </label>
              </div>
              <Link className="registration-form__link" to="/registration">
                {data[context.locale].regLinkTitle}
              </Link>
            </div>
            <LoadingSVG prefix={loadingPrefix} />
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
}
