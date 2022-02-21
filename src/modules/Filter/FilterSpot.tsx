import React, { SyntheticEvent } from 'react';
import data from '../Header/data';
import dataFilter from './data';
import dataSvg from './dataSvg';
import FilterSVG from '../../assets/FilterSVG';
import { AppContext } from '../../components/constants';
import './filterSpot.scss';

const languages = ['english', 'russian', 'german', 'french'];
const contentType = sessionStorage.getItem('contentType');
const filtersOptions = JSON.parse(sessionStorage.getItem('filtersOptions') as string);
let requestBaseURL = '/discover/movie';
let visibleLanguage = 'english';

if (filtersOptions) {
  if (filtersOptions.with_original_language === 'en') {
    visibleLanguage = 'english';
  } else if (filtersOptions.with_original_language === 'ru') {
    visibleLanguage = 'russian';
  } else if (filtersOptions.with_original_language === 'de') {
    visibleLanguage = 'german';
  } else if (filtersOptions.with_original_language === 'fr') {
    visibleLanguage = 'french';
  }
}

if (contentType) {
  requestBaseURL = `/discover/${contentType}`;
}

let originalLanguage = 'en';

let voteCount = 0;
let voteAverage = 0;

if (filtersOptions) {
  originalLanguage = filtersOptions.with_original_language;
  voteCount = filtersOptions['vote_count.gte'];
  voteAverage = filtersOptions['vote_average.gte'];
}

export interface IFilterBtnContent {
  title: string;
  iconMaker: () => JSX.Element;
}

export interface IFilterDropListBtn {
  isOpened: boolean;
  getMovies: (opt?: any) => Promise<void>;
}

export interface IFilterDropListProp {
  updateData: (value: boolean) => void;
  getMovies: (opt?: any) => Promise<void>;
}

function getContent(props: IFilterBtnContent): JSX.Element {
  const { title, iconMaker } = props;

  return (
    <>
      {iconMaker()}
      <span className={title}>{title}</span>
    </>
  );
}

function FilterDropList(props: IFilterDropListProp): JSX.Element {
  const { updateData, getMovies } = props;

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

  const changeLanguage = (e: SyntheticEvent): void => {
    const { classList } = e.target as HTMLLIElement;
    const en = classList.contains('english');
    const ru = classList.contains('russian');
    const de = classList.contains('german');
    const fr = classList.contains('french');

    switch (true) {
      case en: {
        originalLanguage = 'en';
        const options = {
          requestURL: requestBaseURL,
          language: 'en',
          page: 1,
          with_original_language: 'en',
          'vote_count.gte': voteCount,
          'vote_average.gte': voteAverage,
        };
        sessionStorage.setItem('filtersOptions', JSON.stringify(options));
        getMovies(options);
        break;
      }
      case ru: {
        originalLanguage = 'ru';
        const options = {
          requestURL: requestBaseURL,
          language: 'en',
          page: 1,
          with_original_language: 'ru',
          'vote_count.gte': voteCount,
          'vote_average.gte': voteAverage,
        };
        sessionStorage.setItem('filtersOptions', JSON.stringify(options));
        getMovies(options);
        break;
      }
      case de: {
        originalLanguage = 'de';
        const options = {
          requestURL: requestBaseURL,
          language: 'en',
          page: 1,
          with_original_language: 'de',
          'vote_count.gte': voteCount,
          'vote_average.gte': voteAverage,
        };
        sessionStorage.setItem('filtersOptions', JSON.stringify(options));
        getMovies(options);
        break;
      }
      case fr: {
        originalLanguage = 'fr';
        const options = {
          requestURL: requestBaseURL,
          language: 'en',
          page: 1,
          with_original_language: 'fr',
          'vote_count.gte': voteCount,
          'vote_average.gte': voteAverage,
        };
        sessionStorage.setItem('filtersOptions', JSON.stringify(options));
        getMovies(options);
        break;
      }
      default: {
        const options = {
          requestURL: requestBaseURL,
          language: 'en',
          page: 1,
          with_original_language: 'en',
          'vote_count.gte': 0,
          'vote_average.gte': 0,
        };
        getMovies(options);
        break;
      }
    }
  };

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
              {languages.map((item) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li className={`filter-list-item ${item}`} key={item} onClick={changeLanguage}>
                  <FilterSVG />
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
  getMovies;

  contentType;

  constructor(props: IFilterDropListBtn) {
    super(props);
    const { isOpened = false, getMovies } = props;
    this.getMovies = getMovies;
    this.contentType = sessionStorage.getItem('contentType');
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

  activateFilter = (e: SyntheticEvent): void => {
    const { classList, lastChild } = e.currentTarget as HTMLButtonElement;
    const currentTargetList = (lastChild as HTMLSpanElement).classList;
    const filmCase = currentTargetList.contains('Films');
    const seriesCase = currentTargetList.contains('Series');
    const topRatedCase = currentTargetList.contains('Top-Rated');
    const filmElement = e.currentTarget.previousSibling;
    const seriesElement = e.currentTarget.nextSibling;

    if (!classList.contains('active')) {
      classList.add('active');
      switch (true) {
        case filmCase: {
          sessionStorage.setItem('contentType', 'movie');
          requestBaseURL = '/discover/movie';
          const options = {
            requestURL: '/discover/movie',
            language: 'en',
            page: 1,
            with_original_language: originalLanguage,
            'vote_count.gte': voteCount,
            'vote_average.gte': voteAverage,
          };
          sessionStorage.setItem('filtersOptions', JSON.stringify(options));
          (seriesElement as HTMLSpanElement).classList.remove('active');
          this.getMovies(options);
          break;
        }
        case seriesCase: {
          sessionStorage.setItem('contentType', 'tv');
          requestBaseURL = '/discover/tv';
          const options = {
            requestURL: '/discover/tv',
            language: 'en',
            page: 1,
            with_original_language: originalLanguage,
            'vote_count.gte': voteCount,
            'vote_average.gte': voteAverage,
          };
          sessionStorage.setItem('filtersOptions', JSON.stringify(options));

          (filmElement as HTMLSpanElement).classList.remove('active');

          this.getMovies(options);
          break;
        }
        case topRatedCase: {
          voteCount = 100;
          voteAverage = 6;
          const options = {
            requestURL: requestBaseURL,
            language: 'en',
            page: 1,
            with_original_language: originalLanguage,
            'vote_count.gte': 100,
            'vote_average.gte': 6,
          };
          sessionStorage.setItem('filtersOptions', JSON.stringify(options));
          this.getMovies(options);
          break;
        }
        default: {
          const options = {
            requestURL: requestBaseURL,
            language: 'en',
            page: 1,
            with_original_language: 'en',
            'vote_count.gte': 0,
            'vote_average.gte': 0,
          };
          sessionStorage.setItem('filtersOptions', JSON.stringify(options));
          this.getMovies(options);
          break;
        }
      }
    } else {
      classList.remove('active');
      voteCount = 0;
      voteAverage = 0;
      const options = {
        requestURL: requestBaseURL,
        language: 'en',
        page: 1,
        with_original_language: originalLanguage,
        'vote_count.gte': 0,
        'vote_average.gte': 0,
      };
      sessionStorage.setItem('filtersOptions', JSON.stringify(options));
      this.getMovies(options);
    }
  };

  render(): JSX.Element {
    return (
      <AppContext.Consumer>
        {(context): JSX.Element => (
          <div className="filter-container">
            <div className="filter-title-wrapper">
              <div className="filter-title">
                {data[context.locale].filterTitle}
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
                        <span className="filter-value-storage">{visibleLanguage}</span>
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
                      <FilterDropList updateData={this.updateData} getMovies={this.getMovies} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-btn-wrapper">
              {dataFilter.map((item, index) => {
                if ((item === 'Films' && !this.contentType) || (item === 'Films' && this.contentType === 'movie')) {
                  return (
                    <button className="filter-btn active" key={item} type="button" onClick={this.activateFilter}>
                      {getContent({ title: item, iconMaker: dataSvg[index] })}
                    </button>
                  );
                }
                if (item === 'Series' && this.contentType === 'tv') {
                  return (
                    <button className="filter-btn active" key={item} type="button" onClick={this.activateFilter}>
                      {getContent({ title: item, iconMaker: dataSvg[index] })}
                    </button>
                  );
                }
                if (filtersOptions) {
                  if (item === 'Top-Rated' && filtersOptions['vote_average.gte']) {
                    return (
                      <button className="filter-btn active" key={item} type="button" onClick={this.activateFilter}>
                        {getContent({ title: item, iconMaker: dataSvg[index] })}
                      </button>
                    );
                  }
                }
                return (
                  <button className="filter-btn" key={item} type="button" onClick={this.activateFilter}>
                    {getContent({ title: item, iconMaker: dataSvg[index] })}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
