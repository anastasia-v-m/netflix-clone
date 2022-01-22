import React from 'react';
import { IProps, IState } from './langSelection';
import StartData from "../modules/LandingHeader/landingStartCardData.json";
import Buttons from './button';

export default class EmailForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      formTitle: StartData[0].formTitle,
      placeLabel: StartData[0].placeLabel,
      startButton: StartData[0].startButton
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <form className='emailForm'>
          <h3>{this.state.formTitle}</h3>
          <div className='emailFormContainer'>
            <label htmlFor="email">
            <input type="email" className='emailInput' id="email" value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeLabel}/>
          </label>
          <Buttons name='start-button' nameContent='start-button-content' content={this.state.startButton!} arrow='start-button-arrow'/>
          </div>          
        </form>    
    )
  }
}
