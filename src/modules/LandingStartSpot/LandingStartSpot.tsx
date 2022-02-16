import React from 'react';

import SearchIcon from '../../assets/SearchIcon';
import data from './data';

import '../Header/header.scss';
import { AppContext } from '../../components/AppProvider';

const srcName =
  'https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/370ebdc0-5135-43c5-8aa4-14c48dfc1bee/BY-ru-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export default function LandingStartSpot(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="start-card">
          <div className="start-card-background">
            <img className="start-card-img" src={srcName} alt="with promotional movie posters" />
            <div className="img-gradient" />
          </div>
          <div className="start-card-content">
            <h1>{data[context.locale].landingHeaderTitle}</h1>
            <h2>{data[context.locale].landingHeaderAnnotation}</h2>
            <form className="search-spot search-spot_landing-page">
              <div className="search-spot_block">
                <SearchIcon />
                <input type="search" className="search-spot_input" placeholder="Search for Netflix titles and news" />
              </div>
            </form>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}
