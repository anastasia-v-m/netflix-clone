import React from 'react';

import UserFormMain from '../UserFormMain';
import { IUserFormProps } from '../UserFormMain/types';

import './loginOverlap.scss';

export default function LoginOverlap(props: IUserFormProps): JSX.Element {
  const { reg } = props;

  if (reg) {
    return (
      <div className="login-overlap">
        <div className="login-overlap__shadow" />
        <div className="login-overlap__form">
          <div className="login-overlap__content">
            <UserFormMain reg="true" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="login-overlap">
      <div className="login-overlap__shadow" />
      <div className="login-overlap__form">
        <div className="login-overlap__content">
          <UserFormMain />
        </div>
      </div>
    </div>
  );
}
