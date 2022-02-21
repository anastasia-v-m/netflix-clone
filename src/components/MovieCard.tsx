import React from 'react';

import Image from './Image';

export interface IMovieCard {
  imgSrc: string;
  imgAlt: string;
  liClass?: string;
  aClass?: string;
  imageClass?: string;
  spanClass?: string;
  linkAdr?: string;
  cardTitle?: string;
  id?: number;
  navigate?: any;
}

export default function MovieCard(props: IMovieCard): JSX.Element {
  const {
    imgSrc,
    imgAlt,
    linkAdr,
    cardTitle = '',
    liClass = '',
    aClass = '',
    imageClass = '',
    spanClass = '',
    id = 1,
    navigate,
  } = props;

  const clickHandler = (): void => {
    const movieID = id.toString();
    navigate(movieID);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li className={liClass} id={id.toString()} onClick={clickHandler}>
      <a className={aClass} href={linkAdr as string}>
        <Image src={imgSrc} alt={imgAlt} className={imageClass} />
        <span className={spanClass}>{cardTitle}</span>
      </a>
    </li>
  );
}
