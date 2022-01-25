import React from 'react';
import { IVideoProps } from "./types";

class Video extends React.Component<IVideoProps> {
  render() {
    const children = this.props.sources;
    
    return (<video
      className={this.props.className ? this.props.className : ''}
      autoPlay={this.props.autoPlay}
      muted={this.props.muted}
      loop={this.props.loop}
      playsInline={this.props.playsInline}
    >
        {React.Children.map(children, (item) => item)}
      </video>)
  }
};

// Video.defaultProps = { autoPlay: false, muted: false, loop: false, playsInline: false };

export default Video;
