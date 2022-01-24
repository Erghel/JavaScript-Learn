"use strict";

function HiBye() {

    let here = confirm("Тут?");
    const answer = here; // Запишем ответ в константу 

    if (answer == true) { // Если ответ 'Да', то нас приветствуют
    alert("Привет");
}
    else {
        alert("Пока"); // Иначе с нами прощаются
    }
}
button.onclick = HiBye;
