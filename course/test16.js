// Функция, которая пишет слово наоборот 
const reverse = (str) => {
  let i = str.length-1; // Слово нужно писать нажиная с конца, а так как отсчет символом идет с 0, поэтому мы отнимаем один
  let result = ''; // пустая переменная, куда уйдет результат

  while (i >= 0) { // первый элемент строки, на котором все заканчивается
    result = result + str[i];
    i = i - 1;
  }

  return result;
}

/** Решение, которое понравилось (взял у другого человека 
*    function reverse(str) {
*    let i = str.length;
*    let result = '';
*    while (i) {
*        result = result + str[--i];
*    }
*    return result;
*}
*/
