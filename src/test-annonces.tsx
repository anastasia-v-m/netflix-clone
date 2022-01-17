import React, { Fragment } from 'react';

// отдельный модуль с константами или json
const titles = [
  {
    bigTitle: 'Смотреть на телевизоре.',
    annotation: 'Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.',
    imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    altDescr: 'just TV',
  },
  {
    bigTitle: 'Загружайте сериалы для просмотра офлайн.',
    annotation: 'Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.',
    imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    altDescr: 'see movies offline',
  },
  {
    bigTitle: 'Смотрите где угодно.',
    annotation: 'Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре без ограничений и без дополнительной платы.',
    imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
    altDescr: 'any gadget',
  },
  {
    bigTitle: 'Создавайте профили для детей.',
    annotation: 'Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.',
    imgSrc: 'https://occ-0-3666-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd',
    altDescr: 'for children',
  }
];


// отдельный модуль с функцией, которая реализует блок
function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

// отдельный модуль с классом, который рендерит все блоки
class Announcements extends React.Component {
  renderBlock(i) {
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
