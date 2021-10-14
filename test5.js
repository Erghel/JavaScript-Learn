// Функция вызывающая в себе другую функцию 
const weakplayer = (KD) => {
    return (3 * 3) * square(KD);
}

const square = (num) => {
    return num * num; 
} 

console.log(weakplayer(3)) // Выведет 81, так как сначала 3 возведется в квадрат по второй функции, потом умножится на скобку 3*3 (что тоже 9)

