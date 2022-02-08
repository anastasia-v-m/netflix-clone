import React from 'react';

export interface IProps {}

export interface IState {
  value?: string;
  formTitle?: string;
  placeLabel?: string;
  startButton?: string;
}

export default class LangSelection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: 'ru' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.setState({ value: event.target.value });
  }

  render(): JSX.Element {
    const { value } = this.state;
    return (
      <div className="lang-selection-container">
        <div className="lang-selection-wrapper">
          <label htmlFor="lang-switcher-select">
            <div className="select-arrow lang-select-prefix">
              <select value={value} onChange={this.handleChange} className="select-value" id="lang-switcher-select">
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
    );
  }
}
