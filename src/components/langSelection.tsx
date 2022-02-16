import React from 'react';
import { AppContext } from './AppProvider';

export interface IProps {}

export interface IState {
  value?: string;
  formTitle?: string;
  placeLabel?: string;
  startButton?: string;
}

export default function LangSelection() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="lang-selection-container">
          <div className="lang-selection-wrapper">
            <label htmlFor="lang-switcher-select">
              <div className="select-arrow lang-select-prefix">
                <select
                  value={context.locale}
                  onChange={context.updateLocalCode}
                  className="select-value"
                  id="lang-switcher-select"
                >
                  <option lang="en" value="en">
                    English
                  </option>
                  <option lang="ru" value="ru">
                    Русский
                  </option>
                </select>
              </div>
            </label>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}
