"use strict";

function CheckKnowledge() {
    let plus = 4;
    let answer = confirm("2+2 равно 4?", "");
    let plusanswer = prompt("Сколько будет 2+2 ", "");

    if (plusanswer == 4 && answer == true) {
        return alert("Правильно!");
    }
    else {
        return alert("Неверно");
    }
}
