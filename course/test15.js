const skip = (str) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    result = result + str[i];
    i = i + 2;
  }

  return result;
}

console.log(skip("Western"));

// Выведет - Wsen
// Эта функция будет убирать каждый второй символ в слове 
