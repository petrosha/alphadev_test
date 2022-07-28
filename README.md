Test task for [Alphadevteam](https://vacancies.alphadevteam.com/) 

Create a Landing page according to Figma [design](https://www.figma.com/file/faVoB9vEE9LkE4yuraaDDQ/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BB%D1%8F-Junior-React-Developer).

  - React.js Function components are used.
  - The page is adaptive for screen resolutions from   320px до 1920px.
  - As soon as the example is given only for 1440px all other resolutions are made according to my experience. 
  - Redux/Toolkit is used for data management. Two slices are used - one for downloaded data and one for ui. 
  - The menu is used for the page navigation. For small resolutions it changes to the burger-menu with additional full-screen component. 
  - Axios is used for the server conenction. The connection to server is made in useEffect hook as soon as it happens only once.
  - The "Loading" notification is added to Speakers component for the case of slow connections. 
  - The header stays over the page for any window scrolling position. 
  - Placeholders are added for all links
  - All clickable elements have their :hover styles
  - IBM Plex Mono are used for H1 and JetBrains Mono for the rest.


Тестовое задание для [Alphadevteam](https://vacancies.alphadevteam.com/) 

Создать Landing page по [макету](https://www.figma.com/file/faVoB9vEE9LkE4yuraaDDQ/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BB%D1%8F-Junior-React-Developer).

 - Создано форматирование с использованием React Function Components на основе макета в Figma.
 - Форматирование адаптивно для ширин экрана от 320px до 1920px. 
 - Так как макет предоставлен только для 1440px то форматирование для других размеров сделано на мой вкус и опыт. 
 - Для организации данных использован Redux/Toolkit с двумя slice - для загружаемых с сервера данных и для данных страницы.
 - Добавлено меню для навигации по странице. Для малых разрешений меню выполнено в виде burger-menu с одтельным полноэкранным компонентом.
 - Header виден для любой прокрутки страницы. 
 - Загрузка данных с сервера осуществляется в компоненте, через useEffect, так как данные загружаются лишь однажды. Коннекшин через axios. Сделана простейшая проверка на ошибку загрузки с выводом в консоль, чтобы не пугать посетителей.  
 - Добавлено уведомление "Загрузка" на случай медленной загрузки.
 - Ссылки заполнены placeholders.
 - Для всех активных элементов сделаны стили :hover. 
 - Использованы шрифты IBM Plex Mono для заголовка H1 и JetBrains Mono для остального.  
 

