import React from 'react';

import { IImageProps } from './types';

function Image(props: IImageProps): JSX.Element {
  const { src, alt, className = '' } = props;

  return <img src={src} alt={alt} className={className} />;
}

export default Image;
