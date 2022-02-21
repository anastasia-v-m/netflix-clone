import React, { SyntheticEvent, useState, useContext } from 'react';

import axios from 'axios';

import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer';

import SearchSVG from '../../assets/SearchSVG';
import ArrowSVG from '../../assets/ArrowSVG';
import AllFilterSVG from '../../assets/AllFilterSVG';
import { IMoviesData } from '../InternalPage/InternalPage';
import MovieCard from '../../components/MovieCard';
import controller from '../../modules/TMDB/controller';
import { AppContext, FOOTER_INTERNAL_PAGE_TYPE } from '../../components/constants';
import dataSearch from '../../modules/Header/data';

import './searchPage.scss';

let request = '/search/movie';

export default function SearchPage(): JSX.Element {
  const posterBaseURL = 'https://image.tmdb.org/t/p/original';
  const contentType = sessionStorage.getItem('contentType');
  const context = useContext(AppContext);

  if (contentType) {
    request = `/search/${contentType}`;
  }

  const options = {
    language: 'ru-RU',
    page: 1,
    query: '',
  };

  const sessionData = JSON.parse(sessionStorage.getItem('searchMoviesData') as string);
  const sessionSearchValue = sessionStorage.getItem('searchMovieValue');
  const moviesData = (sessionData as IMoviesData).results.filter((elem) => elem.poster_path !== null);
  const [currentMoviesData, setMoviesData] = useState(moviesData);
  const [currentOptions, setOptions] = useState(options);
  const [searchValue, setValue] = useState('');
  const [requestValue, setRequestValue] = useState(sessionSearchValue);
  const [totalPages, setTotalPages] = useState(sessionData.total_pages);

  const changePageHandler = async (e: SyntheticEvent): Promise<void> => {
    const curButtonClassList = (e.currentTarget as HTMLButtonElement).classList;

    if (curButtonClassList.contains('next-page') && currentOptions.page < totalPages) {
      currentOptions.page += 1;
      currentOptions.query = requestValue as string;

      setOptions(currentOptions);

      const url = controller(request, currentOptions);

      await axios
        .get(url)
        .then((res) => {
          const data = (res.data as IMoviesData).results.filter((elem) => elem.poster_path !== null);
          setMoviesData(data);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));
    } else if (curButtonClassList.contains('prev-page') && currentOptions.page >= 2) {
      currentOptions.page -= 1;
      currentOptions.query = requestValue as string;

      setOptions(currentOptions);

      const url = controller(request, currentOptions);

      await axios
        .get(url)
        .then((res) => {
          const data = (res.data as IMoviesData).results.filter((elem) => elem.poster_path !== null);
          setMoviesData(data);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));
    }
  };

  const changeHandler = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  const submitHandler = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    options.query = searchValue;

    setRequestValue(searchValue);

    const url = controller(request, options);

    await axios
      .get(url)
      .then((res) => {
        const pages = res.data.total_pages;
        const data = (res.data as IMoviesData).results.filter((elem) => elem.poster_path !== null);
        setMoviesData(data);
        setTotalPages(pages);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  };

  const navigateToDetails = (id: string): void => {
    sessionStorage.setItem('movieID', id);
  };

  return (
    <>
      <Header type="HEADER_INTERNAL_PAGE" name="header-container" />
      <main className="search-page__main">
        <section className="search">
          <div className="search__wrapper">
            <div className="search__container">
              <h1 className="search__title">{dataSearch[context.locale].searchResult}</h1>
              <form className="search__input_wrapper" onSubmit={submitHandler}>
                <SearchSVG />
                <input
                  className="search__input"
                  type="text"
                  placeholder={dataSearch[context.locale].placeholderResult}
                  onChange={changeHandler}
                />
              </form>
            </div>
          </div>
        </section>
        <div className="white-line" />
        <section className="search-results">
          <div className="filters-wrapper">
            <div className="filters-container">
              {contentType !== 'movie' && (
                <button type="button" className="filters-container__item film">
                  <div className="filters-container__item_wrapper">
                    <AllFilterSVG />
                    <span className="filters-container__span">{dataSearch[context.locale].all}</span>
                  </div>
                  <ArrowSVG />
                </button>
              )}
              {contentType === 'movie' && (
                <button type="button" className="filters-container__item film active">
                  <div className="filters-container__item_wrapper">
                    <AllFilterSVG />
                    <span className="filters-container__span">{dataSearch[context.locale].all}</span>
                  </div>
                  <ArrowSVG />
                </button>
              )}
              {contentType !== 'tv' && (
                <button type="button" className="filters-container__item series">
                  <div className="filters-container__item_wrapper">
                    <AllFilterSVG />
                    <span className="filters-container__span">{dataSearch[context.locale].titles}</span>
                  </div>
                  <ArrowSVG />
                </button>
              )}
              {contentType === 'tv' && (
                <button type="button" className="filters-container__item series active">
                  <div className="filters-container__item_wrapper">
                    <AllFilterSVG />
                    <span className="filters-container__span">{dataSearch[context.locale].titles}</span>
                  </div>
                  <ArrowSVG />
                </button>
              )}
            </div>
          </div>
          <div className="cards-wrapper">
            <div className="results-pages">
              <span className="pages-span">
                {currentOptions.page} - {currentOptions.page + 1}0 results for &nbsp;
                <strong>{`"${requestValue}"`}</strong>
              </span>
              <div className="change-page">
                <button type="button" className="prev-page" onClick={changePageHandler}>
                  <ArrowSVG />
                </button>
                <span className="page-number">{currentOptions.page}</span>
                <button type="button" className="next-page" onClick={changePageHandler}>
                  <ArrowSVG />
                </button>
              </div>
            </div>
            <ul className="search-cards">
              {currentMoviesData.map((elem, index) => {
                const key = elem.title + index.toString();
                return (
                  <MovieCard
                    imgSrc={posterBaseURL + elem.poster_path}
                    imgAlt="movie-poster"
                    linkAdr="/details"
                    cardTitle={elem.title}
                    liClass="card-container"
                    aClass="card-item"
                    imageClass="card-item__poster img-load"
                    spanClass="card-item__title"
                    key={key}
                    id={elem.id}
                    navigate={navigateToDetails}
                  />
                );
              })}
            </ul>
            <div className="results-pages bot-line">
              <span className="pages-span">
                {currentOptions.page} - {currentOptions.page + 1}0 results for &nbsp;
                <strong>{`"${requestValue}"`}</strong>
              </span>
              <div className="change-page">
                <button type="button" className="prev-page" onClick={changePageHandler}>
                  <ArrowSVG />
                </button>
                <span className="page-number">{currentOptions.page}</span>
                <button type="button" className="next-page" onClick={changePageHandler}>
                  <ArrowSVG />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer footerType={FOOTER_INTERNAL_PAGE_TYPE} />
    </>
  );
}
