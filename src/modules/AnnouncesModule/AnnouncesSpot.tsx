import React from 'react';
import Image from '../../components/Image';
import AnimationAnnounce from './animationAnnounce';
import { announcesTitles } from './data';
import './announcesSpot.css';

class Announcements extends React.Component {
  renderBlock(i: number) {
    return (
      <div className='announce-precontainer' key={`announce-wrap-1-${i}`}>
        <div className={`announce-container-${i % 2}`} key={`announce-wrap-2-${i}`}>
          <div className='announce-text-container' key={`announce-wrap-3-${i}`}>
            <h2 className='announce-title' key={`announce-title-${i}`}>{announcesTitles[i].bigTitle}</h2>
            <p className='announce-description' key={`announce-${i}`}>{announcesTitles[i].description}</p>
          </div>
          <div className='announce-img-precontainer' key={`announce-wrap-4-${i}`}>
            <div>
              <Image
                src={announcesTitles[i].imgSrc}
                alt={announcesTitles[i].altDescr}
                className='announce-img'
                key={`announce-img-${i}`}
              />
              <AnimationAnnounce
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
      <div className='all-announces-container'>
        {this.getBlocks()}    
      </div>
    )
  }
}

export default Announcements;
