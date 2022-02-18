import React from 'react';

import Image from '../../components/Image';

import AnimationAnnounce from './animationAnnounce';

import { announcesTitles } from './data';

import './announcesSpot.scss';
import { AppContext } from '../../components/AppProvider';

class Announcements extends React.Component {
  getBlocks(): JSX.Element[] {
    const blocks = [];
    for (let j = 0; j < announcesTitles.ru.length; j += 1) {
      blocks.push(this.renderBlock(j));
    }
    return blocks;
  }

  // eslint-disable-next-line class-methods-use-this
  renderBlock(i: number): JSX.Element {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="announce-precontainer" key={`announce-wrap-1-${i}`}>
            <div className={`announce-container-${i % 2}`}>
              <div className="announce-text-container">
                <h2 className="announce-title">{announcesTitles[context.locale][i].bigTitle}</h2>
                <p className="announce-description">{announcesTitles[context.locale][i].description}</p>
              </div>
              <div className="announce-img-precontainer">
                <div>
                  <Image
                    src={announcesTitles[context.locale][i].imgSrc}
                    alt={announcesTitles[context.locale][i].altDesc}
                    className="announce-img"
                    key={`announce-img-${i}`}
                  />
                  <AnimationAnnounce ind={i} />
                </div>
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }

  render(): JSX.Element {
    return <div className="all-announces-container">{this.getBlocks()}</div>;
  }
}

export default Announcements;
