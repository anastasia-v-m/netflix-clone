import React from 'react';
import { IButtonProps } from "./types";

class Button extends React.Component<IButtonProps> {
  render() {    
    return (<button
      className={this.props.className ? this.props.className : ''}
      onClick={this.props.clickHandler ? this.props.clickHandler : undefined}
    >
        {this.props.content ? this.props.content : ''}
      </button>)
  }
};

export default Button;
