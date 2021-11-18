// Если класс у элемента есть, метод classList.toggle ведёт себя как classList.remove и класс у элемента убирает. 
// А если указанного класса у элемента нет, то classList.toggle, как и classList.add, добавляет элементу этот класс. 
// Нужно написать вторую инструкцию с classList.toggle. Она будет то добавлять, то удалять класс dark-theme при клике. 
// Чтобы темы переключались, инструкции должны работать в противофазе. Для этого в исходной разметке у элемента page должен быть указан один класс темы, а второй нет. 
// Тогда один класс удалится, а другой, наоборот, добавится к элементу.
// Свитчер темы на странице

let page = document.querySelector('.page'); // Делаем переменную, которая будет выбирать класс page
let themeButton = document.querySelector('.theme-button'); // Делаем переменную, которая будет выбирать класс theme-button (По факту эта переменная нам не пригодится) 

themeButton.onclick = function() {
  page.classList.toggle('light-theme'); // К элементу page мы добавляем light-theme, страница "Осветляется" 
  page.classList.toggle('dark-theme'); // К элементу page мы добавляем dark-theme, страница "Темнеет" 
};


<!--<body class="page light-theme">-->

<!--<button class="theme-button" type="button">Изменить тему</button>-->
...

<!--</body>-->
