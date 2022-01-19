import React, { Fragment } from 'react';
import Image from './image';
import titles from '../data/test-data';


fetch('./test-data.json')
  .then(response => response.json())
  .then(data => console.log(data));


class Announcements extends React.Component {
  renderBlock(i: number) {
    return <Fragment>
      <Image
        src={titles[i].imgSrc}
        alt={titles[i].altDescr}
      />
      <h2>{titles[i].bigTitle}</h2>
      <p>{titles[i].annotation}</p>
    </Fragment>;
  }

  getBlocks() {
    let blocks = [];
    for (let j = 0; j < titles.length; j +=1) {
      blocks.push(this.renderBlock(j));
    }
    return blocks;
  }

  render() {  
    return <Fragment>
      <div>
        {this.getBlocks()}
      </div>
    </Fragment>
  }
}

export default Announcements;
