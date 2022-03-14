"use strict";

// else/if
if (1) { 
    console.log('Ok!');
} else { 
    console.log('error');
}

// else if
const num = 50;

if (num < 49) { 
    console.log('error');
} else if (num > 100) {
    console.log('Много');
} else { 
    console.log('Верн0');
}

// Тернарный оператор
(num == 50) ? console.log('Ok') : console.log('error');

// switch
const num = 50;

switch (num) {
    case 49: 
        console.log("error");
        break;
    case 100: 
        console.log("error");
        break;
    case 50: 
        console.log("Ok!");
        break;
    default: 
        console.log("No...");
        break;
} // Также можно сравнивать строки, но эта конструкция только на строгое сравнение 
