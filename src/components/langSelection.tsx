import React, { ReactElement } from 'react';
import { AppContext } from './constants';

const LANG_EN = 'English';
const LANG_RU = 'Русский';

export default function LangSelection(): ReactElement {
  return (
    <AppContext.Consumer>
      {(context): ReactElement => (
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
                    {LANG_EN}
                  </option>
                  <option lang="ru" value="ru">
                    {LANG_RU}
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
