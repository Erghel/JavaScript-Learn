const smallestDivisor = (num) => {
  const iter = (counter, acc) => {
     if (counter===1) {
      return 1;
    }
      if (counter%acc === 0) {
          return acc;
      }
    return iter(counter,acc+1);
  }
    return iter(num,2);
};
//Закрепление функции на практике
// Идея алгоритма:
//   Попробуйте разделить число на 2.
//   Если число делится без остатка, то это наименьший делитель.
//   Если нет, то попробуйте следующий делитель.
//   Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
//
