import { MouseEventHandler } from "react";

interface IButtonProps {
  className?: string,
  content?: string,
  clickHandler?: MouseEventHandler<HTMLButtonElement> | undefined,
}

export type {
  IButtonProps,
}
