import React from 'react';

import { IImageProps } from "./types";

function Image(props: IImageProps): JSX.Element {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className ? props.className : ''}
    />
  );
};

export default Image;
