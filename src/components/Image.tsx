import { IImageProps } from "./types";

function Image(props: IImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className ? props.className : ''}
    />
  );
};

export default Image;
