import React from 'react';
import { Link } from 'react-router-dom';

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
}

export default function Button(props: IPropsButton): JSX.Element {
  const { type = BTN_TYPE_SIMPLE, name = '', linkAdr, nameContent = '', content = '', icon } = props;

  let result: JSX.Element;
  if (type === BTN_TYPE_WITH_ICONS) {
    result = (
      <Link className={name} to={linkAdr as string}>
        <span className={nameContent}>{content}</span>
        <span className={icon} />
      </Link>
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
