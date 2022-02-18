import React, { useContext, useState } from 'react';

import data from './data';

import './questionsSpot.scss';
import { AppContext } from '../../components/AppProvider';
import { IItemData } from '../AnnouncesSpot/data';

export default function QuestionsItem(): JSX.Element {
  const context = useContext(AppContext);
  const statusArray: boolean[] = [];
  const [currentStatus, setCurrentStatus] = useState(statusArray);
  const [activeItem, setActiveItem] = useState(10);

  data[context.locale].forEach(() => statusArray.push(false));

  const handleClick = (index: number) => () => {
    statusArray[index] = !currentStatus[index];

    setActiveItem(index);
    setCurrentStatus(statusArray);
  };

  return (
    <AppContext.Consumer>
      {(item) => (
        <ul className="questions-list">
          {data[item.locale].map((elem: IItemData, index: number) => {
            const isCurrent = index === activeItem && currentStatus[activeItem];

            const svgPrefixStyle = isCurrent ? 'svg-opened' : 'svg-closed';
            const divPrefixStyle = isCurrent ? 'visible' : 'hide';

            return (
              <li className="question-item" onClick={handleClick(index)} key={elem.title} aria-hidden="true">
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
      )}
    </AppContext.Consumer>
  );
}
