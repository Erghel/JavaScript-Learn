"use strict";

function Pass() {
    let pass = 1337;
    let answer = prompt("Введите пароль: ", ""); // Запишем ответ в константу
    const passans = answer;

    if (pass == passans) { // Если ответ 'Да', то нас приветствуют
        alert("Добро пожаловать");
    }
    else {
        alert("Пароль неверный, попробуйте еще.."); // Иначе с нами прощаются
    }
}
