// Итенарный подсчет факториала
const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc; 
    }
    return iter(counter-1, counter*acc);
  }
  return iter (n, 1);
}  
