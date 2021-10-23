const smallestDivisor = (n) => {
    if (n < 1) {
        return NaN;
    } else if (n === 1) {
        return 1;
    } else {
        let counter = 2;
        while (counter <= n) {
            if (n % counter === 0) {
               return counter;
            } else {
                 
                counter = counter + 1;
                
            }
        }
    }
}   
// Задача с курса, я думаю рассказывать, что здесь происходит не стоит, она расписана очень подробно, нужно лишь понимать условия в скобках
// % - означает остаток от деления 
