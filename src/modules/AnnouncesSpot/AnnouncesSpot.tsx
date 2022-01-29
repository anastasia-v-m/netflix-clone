import React from 'react';
import Image from '../../components/Image';
import AnimationAnnounce from './animationAnnounce';
import { announcesTitles } from './data';
import './announcesSpot.scss';

class Announcements extends React.Component {
  getBlocks() {
    const blocks = [];
    for (let j = 0; j < announcesTitles.length; j += 1) {
      blocks.push(this.renderBlock(j));
    }
    return blocks;
  }

  renderBlock(i: number) {
    return (
      <div className="announce-precontainer" key={`announce-wrap-1-${i}`}>
        <div className={`announce-container-${i % 2}`}>
          <div className="announce-text-container">
            <h2 className="announce-title">{announcesTitles[i].bigTitle}</h2>
            <p className="announce-description">{announcesTitles[i].description}</p>
          </div>
          <div className="announce-img-precontainer">
            <div>
              <Image
                src={announcesTitles[i].imgSrc}
                alt={announcesTitles[i].altDescr}
                className="announce-img"
                key={`announce-img-${i}`}
              />
              <AnimationAnnounce ind={i} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div className="all-announces-container">{this.getBlocks()}</div>;
  }
}

export default Announcements;
