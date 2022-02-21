interface IDataFilter {
  [index: string]: Array<string>
}

const dataFilter: IDataFilter = {
  'ru': ['Фильмы', 'Сериалы', 'Лучший рейтинг'],
  'en': ['Films', 'Series', 'Top-Rated'],
};

export default dataFilter;
