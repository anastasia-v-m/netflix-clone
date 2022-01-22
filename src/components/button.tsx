export interface IPropsButton {
  name: string,
  nameContent: string,
  content: string,
  arrow?: string,
}

export default function Buttons(props: IPropsButton) {
  return (
    <button className={props.name}>
      <span className={props.nameContent}>{props.content}</span>
      <span className={props.arrow}></span>
    </button>
  )
}
  