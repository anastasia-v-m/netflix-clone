import React from 'react';
import { IAnimPartProps } from './types';
import Source from '../../components/Source';
import Video from '../../components/Video';
import { announcesVideos, announceLoadAnimationImg, announceLoadAnimationTexts } from './data';
import Image from '../../components/Image';

const anim1 = announcesVideos[0];
const source1 = Source(anim1);
const anim2 = announcesVideos[1];
const source2 = Source(anim2);

class AnimationAnnounce extends React.Component<IAnimPartProps> {
  getAnimationPart() {
    let animationPart;
    switch (this.props.ind) {
      case 0:
        animationPart = (
          <Video
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            sources={[source1]}
            className={'announce-video announce-animation-container'}
          />
        );
        break;
      case 1:
        animationPart = (
          <div className='announce-load-container'>
            <div className='announce-load-img-container'>
              <Image
                src={announceLoadAnimationImg.imgSrc}
                alt={announceLoadAnimationImg.altDescr}
                className='announce-load-img'
              />
            </div>
            <div className='announce-load-text-container'>
              <div className='announce-load-text-movie'>
                {announceLoadAnimationTexts[0]}
              </div>
              <div className='announce-load-text-state'>
              {announceLoadAnimationTexts[1]}
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        animationPart = (
          <Video
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            sources={[source2]}
            className={`announce-video announce-animation-container-2`}
          />
        );
        break;
      default:
        animationPart = (
          <div></div>
        );
        break;
    }
    return animationPart;
  }

  render() {  
    return (
      <div>
         {this.getAnimationPart()}     
      </div>
    )
  }
}

export default AnimationAnnounce;
