import React, { useContext } from 'react';
import { Context } from '../../components/Wrapper';

import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import FilterSpot from '../../modules/Filter';
import MovieCard from '../../components/MovieCard';

import { FOOTER_INTERNAL_PAGE_TYPE } from '../../components/constants';
import { IOneMovieData } from '../PageOnlyOnNetflix/PageOnlyOnNetflix';
import data from '../PageOnlyOnNetflix/data.json';

import './internalPage.scss';

export default function InternalPage(): JSX.Element {
  const context = useContext(Context);
  console.log(context.locale);
  return (
    <Context.Consumer>
      {(value) => (
        <>
          <Header type="HEADER_INTERNAL_PAGE" name="header-container" />
          <FilterSpot />
          <div className="announce">
            <ul className="announce-content">
              {data.map((item) =>
                item.items.map((innerItem: IOneMovieData) => (
                  <MovieCard
                    imgSrc={innerItem.posterSrc}
                    imgAlt="movie-poster"
                    linkAdr={innerItem.src}
                    cardTitle={innerItem.title}
                    liClass="only-netflix-movie-container"
                    aClass="only-netflix-movie"
                    imageClass="only-netflix-movie-poster"
                    spanClass="only-netflix-movie-title"
                  />
                )),
              )}
            </ul>
          </div>
          <Footer footerType={FOOTER_INTERNAL_PAGE_TYPE} />
        </>
      )}
    </Context.Consumer>
  );
}
