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
// Если мы вставим значение 3, то как и из пршлых задач нам выплюнет 6 в ответе, потому что будет выполнятся всего дна функция --> return iter(counter-1, counter*acc);
// Она будет отнимать от counter до тех пор, пока не будет равно 1, а потом просто вытащит нам 6, но откуда? Все просто - в первый раз из 3 вычли 1 и получилось 2, 
// То есть counter стал равен, а Acc стал равен 3, потому что первый раз умножался на 3, после Acc будет умножаться на полученный после первой прокрутки 6, а counter 
// После вычитания даст ответ 1, что выполнит первое условие