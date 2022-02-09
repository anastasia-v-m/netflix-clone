import React from 'react';
import Button from '../../components/Button';
import data from './data';
import dataSvg from './dataSvg';
import './filterSpot.scss';

const filterTitle = 'I am interested in covering titles'

export interface IFilterBtnContent {
  title: string,
  iconMaker: () => JSX.Element,
}

function getContent(props: IFilterBtnContent): JSX.Element {
  const {
    title,
    iconMaker
  } = props;

  return (
    <>
      {iconMaker()}
      <span>{title}</span>
    </>
  );
}

export default function FilterSpot(): JSX.Element {
  return (
    <>
      <div className="filter-container">
        <div className="filter-title-wrapper">
          <h2 className="filter-title">
            {filterTitle}
            <div className="filter-value-container">
              <div className="filter-value-input-wrapper">
                <div className="filter-value-input">
                
                </div>
              </div>
            </div>
          </h2>
        </div>
        <div className="filter-btn-wrapper">
          {data.map((item, index) => (
            <Button
              type='BTN_TYPE_SIMPLE'
              name='filter-btn'
              content={getContent({ title: item, iconMaker: dataSvg[index] })}
            />
          ))}
        </div>
      </div>
      <div className="filter-list-container">
        <div className="filter-list-inner-container">
          <div>
            <div className="filter-list-svg-container">
              <svg viewBox="0 0 24 24" height="16" className="filter-list-svg">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fillRule="evenodd" d="M11 18a7 7 0 10-7-7 7 7 0 007 7zm7-1.38l3.68 3.67-1.42 1.42L16.62 18A9 9 0 1118 16.62z" />
              </svg>
              <input type="text" value="" />            
            </div>
            <div className="filter-list-item-container">
              <ul>
                <li className="filter-list-item">
                  <svg viewBox="0 0 24 24" className="filter-list-item-check">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8.23 18.65L3 13.41 4.42 12l3.81 3.82L19.58 4.46 21 5.88 8.23 18.65z" />
                  </svg>January
                </li>
                <li className="filter-list-item">
                  <svg viewBox="0 0 24 24" className="filter-list-item-check">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8.23 18.65L3 13.41 4.42 12l3.81 3.82L19.58 4.46 21 5.88 8.23 18.65z" />
                  </svg>January1
                </li>
                <li className="filter-list-item">
                  <svg viewBox="0 0 24 24" className="filter-list-item-check">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8.23 18.65L3 13.41 4.42 12l3.81 3.82L19.58 4.46 21 5.88 8.23 18.65z" />
                  </svg>January2
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>  
  );
}
