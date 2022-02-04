function CorrectNumber() {
    let answer = prompt("Сколько будет 3 умножить на 3?", "");
    const correct = 9;

    if (answer == correct) {
        document.write("Молодец, правильный ответ");
    }
    else { 
        document.write(`Правильный ответ ${correct}`);
    }
}
