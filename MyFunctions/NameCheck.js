"use strict";

function CheckName() {
    let name = "qwerty";
    let nameanswer = prompt("Как вас зовут: ", "");

    if (name == nameanswer) {
        return alert("Правильно!");
    }
    else {
        return alert("Неверно")
    }
}
