import React from 'react';
import { IProps, IState } from './langSelection';
import landingStartCardData from '../modules/LandingHeader/landingStartCardData.json';
import Buttons from './Button';

export default class EmailForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      formTitle: landingStartCardData.formTitle,
      placeLabel: landingStartCardData.placeLabel,
      startButton: landingStartCardData.startButton,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form className="emailForm">
        <h3>{this.state.formTitle}</h3>
        <div className="emailFormContainer">
          <label htmlFor="email">
            <input
              type="email"
              className="emailInput"
              id="email"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.state.placeLabel}
            />
          </label>
          <Buttons
            name="start-button"
            nameContent="start-button-content"
            content={this.state.startButton!}
            icon="start-button-arrow"
            href="/registration"
          />
        </div>
      </form>
    );
  }
}
