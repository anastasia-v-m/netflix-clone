import React, { SyntheticEvent, useState } from 'react';
import { IRegFunc } from '../UserFormMain/types';
import { AppContext } from '../../components/constants';

import data from '../UserFormMain/data';

export default function RegistrationNames(props: IRegFunc): JSX.Element {
  const [isFocused, setFocusPrefix] = useState(false);
  const { update } = props;

  const onChangeName = (e: SyntheticEvent): void => {
    const userName = (e.target as HTMLInputElement).value;
    const elemPrefixList = (e.target as HTMLInputElement).classList;
    const isFirstName = true;

    if (userName) {
      setFocusPrefix(true);
    } else {
      setFocusPrefix(false);
    }

    if (elemPrefixList.contains('firstname-user__input')) {
      update(userName, isFirstName);
    } else {
      update(userName, !isFirstName);
    }
  };

  const namePrefix = isFocused ? 'focus' : '';
  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <>
          <div className="firstname-user__wrapper">
            <input
              className={`firstname-user__input ${namePrefix}`}
              type="text"
              name="firstname-user__id"
              id="id-firstname-user"
              onChange={onChangeName}
            />
            <label htmlFor="id-firstname-user" className="firstname-user__label">
              {data[context.locale].firstName}
            </label>
          </div>
          <div className="secondname-user__wrapper">
            <input
              className={`secondname-user__input ${namePrefix}`}
              type="text"
              name="secondname-user__id"
              id="id-secondname-user"
              onChange={onChangeName}
            />
            <label htmlFor="id-secondname-user" className="secondname-user__label">
              {data[context.locale].secondName}
            </label>
          </div>
        </>
      )}
    </AppContext.Consumer>
  );
}
