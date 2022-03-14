const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""); // Спрашиваем сколько фильмов мы уже посмотрели

const personalMovieDB = { 
    count: numberOfFilms, // записываем в объект число просмотренных нами фильмов
    movies: {}, // пустой массив
    actors: {}, // пустой массив
    genres: [], // пустой массив 
    privat: false
    
};
// Зададим вопросы, которые потом передадим в созданные нами пустые массивы 
const a = prompt("Один из последних просмотренных фильмов?", ""), 
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""), 
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b; // присвоим категории movies в объекте значения, которые мы получил от пользователя
personalMovieDB.movies[c] = d; // тоже самое

console.log(personalMovieDB); // выводим в консоль 

/* actors: Object {  }
count: "2"
genres: Array []
movies: Object { test1: "10", test2: "9" }
privat: false **/ 
// Консоль выведет это, я просмотрел 2 фильма, первый - test1, который я оценил на 10, а второй - test2, который я оценил на 9
