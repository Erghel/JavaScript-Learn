function CorrectNumber() {
    let answer = prompt("Сколько будет 3 умножить на 3?", "");
    const correct = 9;

    if (answer == correct) {
        document.getElementById("cr").textContent = "Молодец, правильный ответ"; // Находит p тэг с id = cr, и записывает в него "Молодец, правильный ответ"
    }
    else { 
        document.getElementById("cr").textContent = `Правильный ответ ${correct}`; // Находит p тэг с id = cr, и записывает в него "Правильный ответ 9"
    }
}
