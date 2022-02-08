import React from 'react';

import { IVideoProps } from './types';

function Video(props: IVideoProps): JSX.Element {
  const { sources, className, autoPlay, muted, loop, playsInline } = props;
  const children = sources;

  return (
    <video className={!className ? '' : className} autoPlay={autoPlay} muted={muted} loop={loop} playsInline={playsInline}>
      {React.Children.map(children, (item) => item)}
      <track kind="captions" />
    </video>
  );
}

export default Video;
