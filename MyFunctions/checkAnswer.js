"use strict";

for (let i = 0; i < 2; i++) {
    let a = +prompt("Введите число:", "");
    let b = +prompt("Введите число:", "");;

    if (a && b < 10){
        console.log("Ошибок нет"), console.log(a+b); 
    } else {
        console.log("Ошибка");
    } 

}
// Ошибок нет 3
// ошибок нет 9
