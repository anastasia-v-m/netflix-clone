import React from 'react';

import { Link } from 'react-router-dom';
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
      <Link className={aClass} to={linkAdr as string}>
        <Image src={imgSrc} alt={imgAlt} className={imageClass} />
        <span className={spanClass}>{cardTitle}</span>
      </Link>
    </li>
  );
}
