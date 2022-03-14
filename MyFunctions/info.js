function Info() { 
    let name1 = prompt("Как тебя зовут?", "");
    let age1 = prompt("Сколько тебе лет?", "");
    let student1 = prompt("Ты учишься?", "");

    const info = {
        age: age1, 
        name: name1,
        college: student1
    };
  
    console.log(info);
}

