factorial (n) => {
  let counter = 1;
  let result = 1;
  
  while (counter <= n) {
    result = result * counter;
    counter = counter + 1;
    console.log(result); // Каждый раз, когда повторяется этот блок кода, переменная result будет выводиться на экран
  }  
  
  return result;
}  
// Это не константа, как было с прошлых задач, а переменная let, которую мы сможем менять при выполнении функции, когда захотим
