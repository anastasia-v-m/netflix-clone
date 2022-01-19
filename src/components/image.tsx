import { IImageProps } from "../commonTypes";

function Image(props: IImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
