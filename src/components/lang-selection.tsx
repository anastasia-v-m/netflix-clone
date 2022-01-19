import React from 'react';

interface IProps {
}

interface IState {
  value?: string;
}

export default class LangSelection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {value: 'ru'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className='lang-selection-container'>
        <div className="lang-selection-wrapper">
        <label htmlFor="lang-switcher-select" className="">
        </label>
          <div className="select-arrow lang-select-prefix">
            <select value={this.state.value} onChange={this.handleChange} className='select-value' id="lang-switcher-select">
              <option lang='en' value="en">English</option>
              <option lang='ru' value="ru">Русский</option>
            </select>
          </div> 
        </div>     
      </div>
    )
  }
}