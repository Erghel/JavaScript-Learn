"use strict";

let num = 50;

/** 
while (num <= 55) { 
    console.log(num);
    num++;
}*/

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) { 
    if (i === 6){
        // break; // просто прервет, когда дойдет до 6
        continue; // пропускает шаг, который нам не нужен, то есть равенство 6, поэтому выведет - 1 2 3 4 5 7 8 9
    }

    console.log(i);
}
