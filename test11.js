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
