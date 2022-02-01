import React from 'react';
import { IVideoProps } from "./types";

function Video(props: IVideoProps) {
  const children = props.sources;

  return (<video
    className={props.className ? props.className : ''}
    autoPlay={props.autoPlay}
    muted={props.muted}
    loop={props.loop}
    playsInline={props.playsInline}
  >
    {React.Children.map(children, (item) => item)}
    <track kind='captions' />
  </video>)
}

export default Video;
