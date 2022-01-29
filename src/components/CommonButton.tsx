import React from 'react';
import { IButtonProps } from './types';

function Button(props: IButtonProps) {
  return (
    <button
      type="button"
      className={props.className ? props.className : ''}
      onClick={props.clickHandler ? props.clickHandler : undefined}
    >
      {props.content ? props.content : ''}
    </button>
  );
}

export default Button;
