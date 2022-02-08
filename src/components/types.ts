import { MouseEventHandler } from 'react';

interface IImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface IVideoProps {
  autoPlay: boolean;
  muted: boolean;
  loop: boolean;
  playsInline: boolean;
  sources?: Array<JSX.Element>;
  className?: string;
}

interface ISourceProps {
  src: string;
  type: string;
  className?: string;
}

export type {
  IImageProps,
  IVideoProps,
  ISourceProps,
};
