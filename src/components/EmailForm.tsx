import React from 'react';
import { FormattedMessage } from 'react-intl';

import { IProps, IState } from './langSelection';
import landingStartCardData from '../modules/LandingHeader/landingStartCardData.json';
import Button from './Button';

export default class EmailForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      placeLabel: landingStartCardData.placeLabel,
      startButton: landingStartCardData.startButton,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  render(): JSX.Element {
    const { placeLabel, value, startButton } = this.state;
    return (
      <form className="emailForm">
        <h3>
          <FormattedMessage id="formTitle" />
        </h3>
        <div className="emailFormContainer">
          <label htmlFor="email">
            <input
              type="email"
              className="emailInput"
              id="email"
              value={value}
              onChange={this.handleChange}
              placeholder={placeLabel}
            />
          </label>
          <Button
            type="BTN_TYPE_WITH_ICONS"
            name="start-button"
            nameContent="start-button-content"
            content={startButton!}
            icon="start-button-arrow"
            href="/registration"
          />
        </div>
      </form>
    );
  }
}
