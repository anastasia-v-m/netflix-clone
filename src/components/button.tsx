export interface IPropsButton {
  name: string;
  nameContent: string;
  content: string;
  icon?: string;
  href?: string;
}

export default function Button(props: IPropsButton) {
  const toNextPage = (link?: string) => () => {
    document.location.href = link as string;
  };

  return (
    <button type="button" className={props.name} onClick={toNextPage(props.href)}>
      <span className={props.nameContent}>{props.content}</span>
      <span className={props.icon} />
    </button>
  );
}
