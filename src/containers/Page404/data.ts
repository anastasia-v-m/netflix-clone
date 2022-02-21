import { IData } from '../../modules/LandingStartSpot/data';

const data: IData = {
  'ru': {
    header: 'Не можете найти?',
    explanation: 'Нам не удалось найти эту страницу. Но на главной странице есть еще много всего интересного.',
    buttonText: 'Главная страница',
    buttonRef: 'https://www.netflix.com/by-ru/',
    errorCodeTitle: 'Код ошибки: ',
    errorCode: 'NSES-404',
    srcWord: 'Источник: ',
    imgSrcTitle: 'ЗАТЕРЯННЫЕ В КОСМОСЕ',
  },

  'en': {
    header: 'Cant find?',
    explanation: 'We couldnt find this page. But theres a lot more to the home page.',
    buttonText: 'Main page',
    buttonRef: 'https://www.netflix.com/by-ru/',
    errorCodeTitle: 'Error code: ',
    errorCode: 'NSES-404',
    srcWord: 'Source: ',
    imgSrcTitle: 'LOST IN SPACE',
  },
};

export default data;
