import { ISourceProps } from "./types";

function Source(props: ISourceProps) {
  return (
    <source
      src={props.src}
      type={props.type}
      className={props.className ? props.className : ''}
    />
  );
};

export default Source;
