import React from 'react';
import { IAnimPartProps } from './types';
import Source from '../../components/Source';
import Video from '../../components/Video';
import { announcesVideos } from './data';

const anim1 = announcesVideos[0];
const source1 = Source(anim1);
const anim2 = announcesVideos[1];
const source2 = Source(anim2);

class AnimationAnnonce extends React.Component<IAnimPartProps> {
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
            className={'annonce-video annonce-animation-container'}
          />
        );
        break;
      case 1:
        //anim div
        animationPart = (
          <div></div>
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
            className={'annonce-video annonce-animation-container'}
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

export default AnimationAnnonce;
