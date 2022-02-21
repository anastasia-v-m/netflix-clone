import React from 'react';

import landingStartSpot from '../modules/LandingStartSpot/data';
import Button from './Button';
import { AppContext } from './constants';

export interface IProps {}

export interface IState {
  value?: string;
  content?: {
    [index: string]: {
      [index: string]: string;
    };
  };
}

export default class EmailForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      content: landingStartSpot,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  render(): JSX.Element {
    const { content, value } = this.state;
    return (
      <AppContext.Consumer>
        {(context): JSX.Element => (
          <form className="emailForm">
            <h3>{content![context.locale].formTitle}</h3>
            <div className="emailFormContainer">
              <label htmlFor="email">
                <input
                  type="email"
                  className="emailInput"
                  id="email"
                  value={value}
                  onChange={this.handleChange}
                  placeholder={content![context.locale].placeLabel}
                />
              </label>
              <Button
                type="BTN_TYPE_WITH_ICONS"
                name="start-button"
                nameContent="start-button-content"
                content={content![context.locale].startButton!}
                icon="start-button-arrow"
                linkAdr="/registration"
              />
            </div>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}
