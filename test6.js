// Функция вычисления факториала 
const factorial = (n) => {
    if (n === 1) {
    return 1;
}
  else {
return n * factorial(n-1);
  }
}

console.log(factorial(3)); // Ответ будет 6 (вычислите по формуле из второго return
