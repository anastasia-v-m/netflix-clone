export default function LoadingSVG(props: any): JSX.Element {
  return (
    <svg
      className={`loading-svg ${props.prefix}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle className="circle-loading" cx="50" cy="50" r="32">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
}
