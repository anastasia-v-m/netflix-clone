import { IData } from '../LandingStartSpot/data';

export interface IItem {
  [index: string]: string
}

interface IDataFooter {
  [index: string]: Array<IItem>
}

export const data: IDataFooter = {
  'ru': [
    {
      id: '0',
      title: 'Распространенные вопросы',
      link: '/faq'
    },
    {
      id: '1',
      title: 'Правила использования',
      link: '/terms-use'
    },
    {
      id: '2',
      title: 'Только на Netflix',
      link: '/on-netflix'
    },
    {
      id: '3',
      title: 'Скоро в кино',
      link: '/coming-soon'
    }
  ],
  'en': [
    {
      id: '0',
      title: 'FAQ',
      link: '/faq'
    },
    {
      id: '1',
      title: 'Terms of use',
      link: '/terms-use'
    },
    {
      id: '2',
      title: 'Only on Netflix',
      link: '/on-netflix'
    },
    {
      id: '3',
      title: 'Coming soon to cinema',
      link: '/coming-soon'
    }
  ],
};

export const dataQuestion: IData = {
  'ru': {
      titleQuestion: 'Есть вопросы? Свяжитесь с нами',
    },
  'en': {
      titleQuestion: 'Have questions? Contact us',
    },
};