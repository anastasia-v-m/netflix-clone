import React from 'react';

function FilmSvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <path fill="none" d="M0 0h24v24H0z" />
      <circle cx="8.95" cy="9" r="2" />
      <circle cx="8.95" cy="15" r="2" />
      <circle cx="11.95" cy="12" r="1" />
      <circle cx="14.95" cy="15" r="2" />
      <circle cx="14.95" cy="9" r="2" />
      <path d="M12 2a10 10 0 00-6 18H2v2h10a10 10 0 000-20zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
    </svg>
  );
}

function SeriesSvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M19 6V4h-4V2H1v20h14v-2h4v-2h4V6zm-6 14H3V4h10zm4-2h-2V6h2zm4-2h-2V8h2z" />
        <path d="M6 10v4l4-2-4-2z" />
      </g>
    </svg>
  );
}

function DocumentarySvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <path fillRule="evenodd" d="M3 3h18v18H3V3zm16 12V9H5v6h14zm0-8V5h-2v2h2zm-6-2h2v2h-2V5zM5 5v2h2V5H5zm6 2H9V5h2v2zm8 10v2h-2v-2h2zm-4 0h-2v2h2v-2zM5 19v-2h2v2H5zm4 0h2v-2H9v2z" clipRule="evenodd" />
    </svg>
  );
}

function KidsSvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <g clipPath="url(#clip0)">
        <path fillRule="evenodd" d="M5.455 10.422c1.527 0 2.836-1.25 2.836-2.71S6.98 5 5.455 5C3.927 5 2.618 6.251 2.618 7.711s1.31 2.711 2.837 2.711zm0-3.754c.654 0 1.09.418 1.09 1.043 0 .626-.436 1.043-1.09 1.043-.655 0-1.091-.417-1.091-1.043 0-.625.436-1.043 1.09-1.043zM21.382 7.711c0 1.46-1.31 2.711-2.837 2.711-1.527 0-2.836-1.25-2.836-2.71S17.02 5 18.545 5c1.528 0 2.837 1.251 2.837 2.711zm-1.746 0c0-.625-.436-1.043-1.09-1.043-.655 0-1.091.418-1.091 1.043 0 .626.436 1.043 1.09 1.043.655 0 1.091-.417 1.091-1.043zM14.836 9.797c0 1.46-1.309 2.711-2.836 2.711s-2.836-1.251-2.836-2.711S10.473 7.086 12 7.086s2.836 1.25 2.836 2.71zm-1.745 0c0-.626-.436-1.043-1.091-1.043s-1.09.417-1.09 1.043c0 .625.435 1.043 1.09 1.043s1.09-.418 1.09-1.043z" clipRule="evenodd" />
        <path d="M13.964 14.28c.981-1.46 2.618-2.398 4.582-2.398 3.054 0 5.454 2.295 5.454 5.214h-2.182c0-1.772-1.418-3.128-3.273-3.128-1.2 0-2.181.626-2.727 1.46.982.938 1.636 2.294 1.636 3.754h-2.181c0-1.773-1.418-3.128-3.273-3.128-1.854 0-3.273 1.355-3.273 3.128H6.545c0-1.46.655-2.816 1.637-3.754a3.245 3.245 0 00-2.727-1.46c-1.855 0-3.273 1.356-3.273 3.128H0c0-2.92 2.4-5.214 5.455-5.214 1.963 0 3.6.939 4.581 2.399A6.435 6.435 0 0112 13.968c.655 0 1.31.104 1.964.313z" />
      </g>
    </svg>
  );
}

function RealitySvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <path fill="none" d="M0 0h24v24H0z" />
      <path fillRule="evenodd" d="M18 9V6H1v12h17v-2.95L23 17V7zm-2 7H3V8h13zm5-2l-3-1v-2l3-1z" />
    </svg>
  );
}

function StandUpComedySvg(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="filter-btn-svg">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18 12a6 6 0 01-12 0H4a8 8 0 007 7.93V22h2v-2.07A8 8 0 0020 12z" />
      <path d="M12 16a4 4 0 004-4V6a4 4 0 00-8 0v6a4 4 0 004 4zM10 6a2 2 0 014 0v6a2 2 0 01-4 0z" />
    </svg>
  );
}

const dataSvg = [
  FilmSvg,
  SeriesSvg,
  DocumentarySvg,
  KidsSvg,
  RealitySvg,
  StandUpComedySvg
];

export default dataSvg;
