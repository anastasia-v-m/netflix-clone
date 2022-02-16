export interface IData {
  [index: string]: {
    [index: string]: string
  };
}

const data: IData = {
  'ru': {
    locale: 'ru',
    landingHeaderTitle: 'Фильмы, сериалы и многое другое без ограничений.',
    landingHeaderAnnotation: 'Смотрите где угодно. Отменить подписку можно в любое время.',
    formTitle: 'Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.',
    placeLabel: 'Адрес электронной почты',
    startButton: 'Начать смотреть',
    internalHeaderTitle: 'Откройте для себя истории, чтобы поделиться с Беларусью.',
  },

  'en': {
    locale: 'en',
    landingHeaderTitle: 'Unlimited movies, TV shows, and more.',
    landingHeaderAnnotation: 'Watch anywhere. Cancel anytime.',
    formTitle: 'Ready to watch? Enter your email to create or restart your membership.',
    placeLabel: 'Email address',
    startButton: 'Get started',
    internalHeaderTitle: 'Discover stories to share with Belarus.',
  },
};

export default data;