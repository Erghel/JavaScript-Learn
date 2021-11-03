const factorial = (n) => {
  let result  = 1;

  for (let counter = 1; counter <= n; counter++) {
    result *= counter;
  }

  return result;
}
