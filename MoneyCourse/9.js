"use strict";

// function showFirstMessege() { 
//     console.log('Hello World');
// }

// showFirstMessege(); // Hello World

// function showFirstMessege(text) { // будет получать один аргумент text
//     console.log(text);
// }

// showFirstMessege("Erghel"); // передаем в функцию Erghel, потом это будет выведено

// function showFirstMessege(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessege("Erghel");
// // console.log(num); // будет ошибка, так как переменная внутри функции и ее нельзя вытащить

// let num = 20; // Глобальная переменная
// function showFirstMessege(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessege("Erghel");
// console.log(num); // Выведет 10

// let num = 20; // Глобальная переменная
// function showFirstMessege(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num); // Выведет 10, так как обращается к локальной переменной
//     // Если бы внутри функции не было перменной, то снова бы вывело 20
// }

// showFirstMessege("Erghel");
// console.log(num); // Выведет 20

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(100, 2));

// function ret() { 
//     let num = 50;
//     return num; // поможет вывести наружу
// }

// const anotherNum = ret();
// console.log(anotherNum); // 50

// const logger = function() { 
//     console.log("Hello")
// };

// logger(); // Hello 

const calc = (a , b) => { return a + b };
