import React from 'react';
import data from './data';
import './filterSpot.scss';
import dataSvg from './dataSvg';

const filterTitle = 'I am interested in covering titles ';
const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

function getCurrentMonth(): string {
  return months[new Date().getMonth()];
}

function getCurrentMonthArr(): Array<string> {
  const arrDown = 1;
  const arrUp = 5;
  const firstMonthIndex = new Date().getMonth() + months.length - arrDown;
  const workArr = [...months, ...months, ...months];
  return workArr.slice(firstMonthIndex, firstMonthIndex + arrUp);
}

export interface IFilterBtnContent {
  title: string;
  iconMaker: () => JSX.Element;
}

export interface IFilterDropListBtn {
  isOpened: boolean;
}

export interface IFilterDropListProp {
  updateData: (value: boolean) => void;
}

function getContent(props: IFilterBtnContent): JSX.Element {
  const { title, iconMaker } = props;

  return (
    <>
      {iconMaker()}
      <span>{title}</span>
    </>
  );
}

function FilterDropList(props: IFilterDropListProp): JSX.Element {
  const monthArr = getCurrentMonthArr();
  const { updateData } = props;

  function getValue(event: React.SyntheticEvent): void {
    const curElem = event.target as Element;
    const selectedMonth = curElem.textContent as string;
    const filterValueInput = document.querySelector('.filter-value-storage');
    if (filterValueInput) {
      filterValueInput.textContent = `in ${selectedMonth}`;
      updateData(true);
    }
  }

  function showCheck(event: React.SyntheticEvent): void {
    const curNode = event.target as Node;
    const childSvg = curNode.firstChild as Element;
    childSvg.classList.add('filter-svg-active');
  }

  function hideCheck(event: React.SyntheticEvent): void {
    const curNode = event.target as Node;
    const childSvg = curNode.firstChild as Element;
    childSvg.classList.remove('filter-svg-active');
  }

  return (
    <div className="filter-list-container filter-no-active-list">
      <div className="filter-list-inner-container">
        <div className="filter-list">
          <div className="filter-list-svg-container">
            <svg viewBox="0 0 24 24" height="16" className="filter-list-svg">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fillRule="evenodd"
                d="M11 18a7 7 0 10-7-7 7 7 0 007 7zm7-1.38l3.68 3.67-1.42 1.42L16.62 18A9 9 0 1118 16.62z"
              />
            </svg>
            <input type="text" defaultValue="" />
          </div>
          <div className="filter-list-item-container">
            <ul
              onClick={getValue}
              onKeyDown={getValue}
              onMouseOver={showCheck}
              onMouseOut={hideCheck}
              onFocus={showCheck}
              onBlur={hideCheck}
              aria-hidden="true"
            >
              {monthArr.map((item) => (
                <li className="filter-list-item" key={item}>
                  <svg viewBox="0 0 24 24" className="filter-list-item-check">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8.23 18.65L3 13.41 4.42 12l3.81 3.82L19.58 4.46 21 5.88 8.23 18.65z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class FilterSpot extends React.Component<IFilterDropListBtn, { opened: boolean }> {
  constructor(props: IFilterDropListBtn) {
    super(props);
    const { isOpened = false } = props;
    this.state = {
      opened: isOpened,
    };
  }

  handleClick = (): void => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
    this.openBtnToogle();
  };

  openBtnToogle = (): void => {
    const openedImg = document.querySelector('.opened');
    const closedImg = document.querySelector('.closed');
    const dropList = document.querySelector('.filter-list-container');

    if (openedImg && closedImg && dropList) {
      const { opened } = this.state;
      if (opened) {
        openedImg.classList.add('filter-value-open-img-no-active');
        closedImg.classList.remove('filter-value-open-img-no-active');
        dropList.classList.add('filter-no-active-list');
      } else {
        closedImg.classList.add('filter-value-open-img-no-active');
        openedImg.classList.remove('filter-value-open-img-no-active');
        dropList.classList.remove('filter-no-active-list');
      }
    }
  };

  handleKeyPress = (): void => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
    this.openBtnToogle();
  };

  updateData = (value: boolean): void => {
    this.setState({ opened: value });
    this.openBtnToogle();
  };

  render(): JSX.Element {
    return (
      <div className="filter-container">
        <div className="filter-title-wrapper">
          <h2 className="filter-title">
            {filterTitle}
            <div
              className="filter-value-container"
              role="button"
              tabIndex={0}
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
            >
              <div className="filter-value-input-wrapper">
                <div className="filter-drop-list-container">
                  <div className="filter-value-input">
                    <span className="filter-value-storage">{`in ${getCurrentMonth()}`}</span>
                    <div className="filter-value-open-img-container">
                      <svg viewBox="0 0 24 24" className="filter-value-open-img opened filter-value-open-img-no-active">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6 15l6-6 6 6H6z" />
                      </svg>
                      <svg viewBox="0 0 24 24" className="filter-value-open-img closed">
                        <path fill="none" d="M0 24V0h24v24z" />
                        <path d="M18 9l-6 6-6-6h12z" />
                      </svg>
                    </div>
                  </div>
                  <FilterDropList updateData={this.updateData} />
                </div>
              </div>
            </div>
          </h2>
        </div>
        <div className="filter-btn-wrapper">
          {data.map((item, index) => (
<<<<<<< HEAD
            <button className="filter-btn" key={item} type="button">
              {getContent({ title: item, iconMaker: dataSvg[index] })}
            </button>
=======
            <Button
              type="BTN_TYPE_SIMPLE"
              name="filter-btn"
              linkAdr="/"
              content={getContent({ title: item, iconMaker: dataSvg[index] })}
              key={item}
            />
>>>>>>> eb0d858 (feat: fix some issues)
          ))}
        </div>
      </div>
    );
  }
}
