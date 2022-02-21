import React from 'react';

import { ISourceProps } from './types';

function Source(props: ISourceProps): JSX.Element {
  const { src, type, className } = props;

  return <source src={src} type={type} className={!className ? '' : className} />;
}

export default Source;
