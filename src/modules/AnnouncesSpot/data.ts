export interface IItemData {
  [index: string]: string
}

export interface IDataTranslate {
  [index: string]: Array<IItemData>;
}

const announcesVideos = [
  {
    src: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v',
    type: 'video/mp4',
  },
  {
    src: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v',
    type: 'video/mp4',
  },
];

const announcesTitles: IDataTranslate = {
  'ru': [
    {
      bigTitle: 'Смотреть на телевизоре.',
      description: 'Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
      altDesc: 'just TV',
    },
    {
      bigTitle: 'Загружайте сериалы для просмотра офлайн.',
      description: 'Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
      altDesc: 'see movies offline',
    },
    {
      bigTitle: 'Смотрите где угодно.',
      description:
        'Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре без ограничений и без дополнительной платы.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
      altDesc: 'any gadget',
    },
    {
      bigTitle: 'Создавайте профили для детей.',
      description:
        'Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.',
      imgSrc:
        'https://occ-0-3666-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd',
      altDesc: 'for children',
    },
  ],
  'en': [
    {
      bigTitle: 'Enjoy on your TV.',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
      altDesc: 'just TV',
    },
    {
      bigTitle: 'Download your shows to watch offline.',
      description: 'Save your favorites easily and always have something to watch.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
      altDesc: 'see movies offline',
    },
    {
      bigTitle: 'Watch everywhere.',
      description:
        'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
      imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
      altDesc: 'any gadget',
    },
    {
      bigTitle: 'Create profiles for kids.',
      description:
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
      imgSrc:
        'https://occ-0-3666-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd',
      altDesc: 'for children',
    },
  ]
  
};

const announceLoadAnimationImg = {
  imgSrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png',
  altDesc: 'pre-load example',
};

const announceLoadAnimationTexts = ['Очень странные дела', 'Идет загрузка...'];

export { announcesVideos, announcesTitles, announceLoadAnimationImg, announceLoadAnimationTexts };
