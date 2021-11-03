// Задание - Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.
const isPrime = (num) => {
    if (num <= 1) {
        return false; 
    }
    if (num == 2) {
        return true;
    }
    for ( i = 2; i < num; i++) {
        if (num%i === 0) 
            return false;
    }
    return true
}
