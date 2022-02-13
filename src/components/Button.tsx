import React from 'react';

export const BTN_TYPE_WITH_ICONS = 'BTN_TYPE_WITH_ICONS';
export const BTN_TYPE_SIMPLE = 'BTN_TYPE_SIMPLE';

export interface IPropsButton {
  type: typeof BTN_TYPE_WITH_ICONS | typeof BTN_TYPE_SIMPLE;
  nameContent?: string;
  name?: string;
  content?: string | JSX.Element | Element;
  icon?: string;
  linkAdr?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function Button(props: IPropsButton): JSX.Element {
  const {
    type = BTN_TYPE_SIMPLE,
    name = '',
    linkAdr,
    nameContent = '',
    content = '',
    icon,
  } = props;

  const toNextPage = (link?: string) => () => {
    document.location.href = link as string;
  };

  let result: JSX.Element;
  if (type === BTN_TYPE_WITH_ICONS) {
    result = (
      <button type="button" className={name} onClick={linkAdr ? toNextPage(linkAdr) : undefined}>
        <span className={nameContent}>{content}</span>
        <span className={icon} />
      </button>
    );
  } else {
    let onclickFunc: undefined | (() => void) | React.MouseEventHandler;
    if (linkAdr) {
      onclickFunc = toNextPage(linkAdr);
    }
    else if (props.clickHandler){
      onclickFunc = props.clickHandler;
    }
    result = (
      <button
        type="button"
        className={name}
        onClick={onclickFunc}
      >
        {content}
      </button>
    );
  }

  return (
    result
  );
}
