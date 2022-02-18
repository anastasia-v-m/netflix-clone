import React from 'react';

import data from './data';

import './questionsSpot.scss';
import { AppContext } from '../../components/AppProvider';
import QuestionsItem from './QuestionsItem';

export default function QuestionsSpot(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="questions">
          <div className="questions-wrapper">
            <h2 className="questions-title">{data[context.locale][0].questionTitle}</h2>
            <ul className="questions-list">
              <QuestionsItem />
            </ul>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}
