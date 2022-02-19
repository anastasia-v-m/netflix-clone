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
      link: '/#'
    },
    {
      id: '3',
      title: 'Скоро в кино',
      link: '/#'
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