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
}

export default function MovieCard(props: IMovieCard): JSX.Element {
  const { imgSrc, imgAlt, linkAdr, cardTitle = '', liClass = '', aClass = '', imageClass = '', spanClass = '' } = props;

  return (
    <li className={liClass}>
      <a className={aClass} href={linkAdr as string}>
        <Image src={imgSrc} alt={imgAlt} className={imageClass} />
        <span className={spanClass}>{cardTitle}</span>
      </a>
    </li>
  );
}
