export interface IPropsButton {
  name: string,
  nameContent: string,
  content: string,
  icon?: string,
}

export default function Buttons(props: IPropsButton) {
  return (
    <button className={props.name} type="button">
      <span className={props.nameContent}>{props.content}</span>
      <span className={props.icon} />
    </button>
  )
}
  