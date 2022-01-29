import React from 'react';

export interface IPropsButton {
  name: string;
  nameContent: string;
  content: string;
  icon?: string;
  href?: string;
}

export default function Button(props: IPropsButton): JSX.Element {
  const {
    name,
    href,
    nameContent,
    content,
    icon,
  } = props;

  const toNextPage = (link?: string) => () => {
    document.location.href = link as string;
  };

  return (
    <button type="button" className={name} onClick={toNextPage(href)}>
      <span className={nameContent}>{content}</span>
      <span className={icon} />
    </button>
  );
}
