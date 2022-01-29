import { useState } from 'react';

import data from './data.json';

import DataInterface from './types';

import './questionsSpot.scss';

function QuestionsItem(): JSX.Element {
  const statusArray: boolean[] = [];
  const [currentStatus, setCurrentStatus] = useState(statusArray);
  const [activeItem, setActiveItem] = useState(10);

  data.forEach(() => statusArray.push(false));

  const handleClick = (index: number) => () => {
    statusArray[index] = !currentStatus[index];

    setActiveItem(index);
    setCurrentStatus(statusArray);
  };
  return (
    <ul className="questions-list">
      {data.map((elem: DataInterface, index: number) => {
        const isCurrent = index === activeItem;

        const svgPrefixStyle = isCurrent && currentStatus[activeItem] ? 'svg-opened' : 'svg-closed';
        const divPrefixStyle = isCurrent && currentStatus[activeItem] ? 'visible' : 'hide';

        return (
          <li className="question-item" onClick={handleClick(index)} key={index}>
            <button className="question-item__btn" type="button">
              {elem.title}
              <svg id="thin-x" viewBox="0 0 26 26" className={`svg-icon svg-icon-thin-x ${svgPrefixStyle}`} focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
              </svg>
            </button>
            <div className={`question-item__answer ${divPrefixStyle}`}>
              <span>{elem.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function QuestionsSpot() {
  return (
    <div className="questions">
      <div className="questions-wrapper">
        <h2 className="questions-title">Распространенные вопросы</h2>
        <ul className="questions-list">
          <QuestionsItem />
        </ul>
      </div>
    </div>
  );
}
