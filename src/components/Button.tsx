import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import actionGenerator from '../store/actions';
import store from '../store/store';

export const BTN_TYPE_WITH_ICONS = 'BTN_TYPE_WITH_ICONS';
export const BTN_TYPE_SIMPLE = 'BTN_TYPE_SIMPLE';

export interface IPropsButton {
  type: typeof BTN_TYPE_WITH_ICONS | typeof BTN_TYPE_SIMPLE;
  nameContent?: string;
  name?: string;
  content?: string | JSX.Element | Element;
  icon?: string;
  linkAdr?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  logBtn?: boolean;
}

export default function Button(props: IPropsButton): JSX.Element {
  const { type = BTN_TYPE_SIMPLE, name = '', linkAdr, nameContent = '', content = '', icon, logBtn = false } = props;
  const currentLinkAdr = logBtn === true && store.getState().isDone === true ? '' : linkAdr;
  const navigator = useNavigate();

  const updateData = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    const { isDone } = store.getState();

    const storeType = isDone ? 'HAS_LOGED_OUT' : 'HAS_LOGED_IN';
    const storeValue = isDone ? 'Войти' : 'Выйти';
    const storeAction = actionGenerator(storeType, storeValue, !isDone);
    store.dispatch(storeAction);
    const elem = document.querySelector('#logbtn');
    if (elem) {
      elem.textContent = store.getState().value as string;
    }
    if (isDone) {
      sessionStorage.removeItem('user');
    } else {
      navigator('/login-form');
    }
  };

  let result: JSX.Element;
  if (type === BTN_TYPE_WITH_ICONS) {
    result = (
      <Link className={name} to={currentLinkAdr as string}>
        <span className={nameContent}>{content}</span>
        <span className={icon} />
      </Link>
    );
  } else if (logBtn) {
    result = (
      <div onClick={updateData} onKeyDown={updateData} area-hidden="true" role="button" tabIndex={0} id="login-btn">
        <Link className={name} to={linkAdr as string}>
          {content}
        </Link>
      </div>
    );
  } else {
    result = (
      <Link className={name} to={linkAdr as string}>
        {content}
      </Link>
    );
  }

  return result;
}
