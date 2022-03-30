"use strict";

for (let i = 0; i < 2; i++) {
    let a = +prompt("Введите число:", "");
    let b = +prompt("Введите число:", "");;

    if (a && b < 10 && a && b != null){
        console.log("Ошибок нет"), console.log(a+b);
    } else {
        console.log("Ошибка");
        i--; // Если в первом нажмут отмена, то цикл попросит ввести числа еще раз
    } 

}
// Ошибок нет 3
// ошибок нет 9
