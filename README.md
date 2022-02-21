# netflix-clone
netflix clone. RSS project

## О приложении:

Netflix-Clone (Копия приложения Netflix - https://www.netflix.com с частично схожим функционалом)
________________________________________
## Планировщик:

[Trello](https://trello.com/b/6aoiy2at/netflix-clone)
________________________________________
## Краткое описание проекта:

Копия приложения [Netflix](https://www.netflix.com) с частично схожим функционалом.  
Есть возможность авторизации пользователя, поиск контента (поиск по укрупненным категориям, по языку контента, по ключевым словам), просмотр информации о найденном контенте (описание, постер, трейлеры, роли и т.п.)   
Приложение доступно для использования на ПК и планшетах.  
________________________________________
## Основной стек технологий

*	CRA, React; React Router; Redux;
*	JS, TypeScript;
*	REST API; Fetch/Async/Await;
*	SCSS; Responsive screen; Semantic;
*	ESLint; Git;
*	Pattern Module;
________________________________________
## Подробнее о проекте:

*	Главная страница (Lending Page);
*	Страница/модуль авторизации (включает форму для авторизации/ валидацию/ привязку к API);
*	Страницы поиска и результат поиска (Привязка к API/ Как одно из основных требований: авторизованный пользователь имеет возможность полноценно пользоваться поиском);
*	Фильтрация результатов поиска;
*	Отображение несколько групп контента (копии страниц Netflix без привязки к API);
*	Отображение технической информации - FAQ, условия использования, ссылки на социальные сети (копии страниц Netflix без привязки к API);
*	Детальная страница фильма (Привязка к API/ Отображает всю информацию о фильме);
*	Мультиязычность;
*	Роутинг;
________________________________________
## Запуск приложения в режиме разработки:

Для запуска приложения в режиме разработки необходимо:
*	Зайти в репозиторий проекта https://github.com/anastasia-v-m/netflix-clone;
*	Скачать файлы на локальный компьютер (Code -> Download ZIP) или склонировать репозиторий в среде разработки (`git clone git@github.com:anastasia-v-m/netflix-clone.git`)
*	Если файлы скачивались архивом, необходимо распаковать их;
*	В среде разработки перейти в папку с проектом netflix-clone;
*	Установить зависимости командой `npm install`;

Команды, доступные в режиме разработки:
* `npm run start`  
Запускает тестовый сервер в браузере по адресу [http://localhost:3000](http://localhost:3000), перезапускает сервер при изменении в коде, выводит ошибки в консоли. 
* `npm run build`  
Собирает минифицированное приложение для публикации в папке build.
* `npm run eject`  
**После выполнения операции выбрасывания восстановить проект в существующем виде нелья!**  
Данная операция отключить проект от конфигурации сборки.

Чтобы узнать больше о [React documentation](https://reactjs.org/), перейдите по ссылке.
________________________________________
## Запуск приложения в пользовательском редиме:

Для запуска приложения в режиме пользователя необходимо:
*	Перейти по адресу приложения;
![Общий вид приложения](https://user-images.githubusercontent.com/83609149/154959992-f7a72482-7359-4577-8be5-f6de987367c0.png)
*	Зарегистрироваться (при необходимости) и авторизоваться, нажав на кнопку «Войти»
 ![Формы регистрации и авторизации](https://user-images.githubusercontent.com/83609149/154959555-7ac51244-a680-4f2f-b9c8-7cd193fa6185.JPG)
*	Ввести данные для регистрации (при необходимости), либо учетную запись и пароль
*	При удачной авторизации попадаем на страницу поиска контента. 
 ![Страница с поиском](https://user-images.githubusercontent.com/83609149/154959699-da26f124-27e4-43e3-b426-f7ed665cd8bf.JPG)
*	На странице поиска мы можем выбрать укрупненную категорию – фильмы, сериалы, контент с наивысшим рейтингом – нажав на соответствующую кнопку. Также можем выбрать язык контента в выпадающем списке.
 ![Фильтры](https://user-images.githubusercontent.com/83609149/154959849-6ca67beb-56a7-4c5b-87ba-a0e53f5b42b4.JPG)
*	При нажатии на карточку контента, переходим на страницу контента, где представлена информация о фильме
	 ![Данные о контенте](https://user-images.githubusercontent.com/83609149/154960151-81c142a3-1998-42c5-8e35-e16d53771dec.JPG)


________________________________________
## Команда разработчиков:

*	[Stanislav V. (developer)](https://github.com/Arxons)
*	[Anastasia M. (developer)](https://github.com/anastasia-v-m)
*	[Daria K. (developer)](https://github.com/Divakotova)
*	[Dzmitry K. (lead)](https://github.com/DimaKacer)


________________________________________
## RSSchool:

[RSSchool](https://rs.school/js/)
