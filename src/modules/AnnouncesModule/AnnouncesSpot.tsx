import React from 'react';
import Image from '../../components/Image';
import AnimationAnnonce from './animationAnnounce';
import { announcesTitles } from './data';
import './announcesSpot.css';

class Announcements extends React.Component {
  renderBlock(i: number) {
    return (
      <div className='' key={`annonce-wrap-1-${i}`}>
        <div className={`annonce-container-${i % 2}`} key={`annonce-wrap-2-${i}`}>
          <div className='annonce-text-container' key={`annonce-wrap-3-${i}`}>
            <h2 className='annonce-title' key={`annonce-title-${i}`}>{announcesTitles[i].bigTitle}</h2>
            <p className='annonce-description' key={`annonce-${i}`}>{announcesTitles[i].description}</p>
          </div>
          <div className='annonce-img-container' key={`annonce-wrap-4-${i}`}>
            <Image
              src={announcesTitles[i].imgSrc}
              alt={announcesTitles[i].altDescr}
              className='annonce-img'
              key={`annonce-img-${i}`}
            />
            <div>
              <AnimationAnnonce
                ind={i}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBlocks() {
    let blocks = [];
    for (let j = 0; j < announcesTitles.length; j +=1) {
      blocks.push(this.renderBlock(j));
    }
    return blocks;
  }

  render() {  
    return (
      <div className='all-annonces-container'>
        {this.getBlocks()}    
      </div>
    )
  }
}

export default Announcements;
