// furmuli.js
const pu = 3.44
const E = 2.456

const kvadrat = (x) => { 
  return x * x;
};

const SuKa = (r) => {
  return = 3 * pu * kvadrat(r);
};

export default SuKa // В факл, где мы захотим использовать фунцию "SuKa" пойдет только этот кусок кода

// xop.js

import SuKa from "./furmuli"

const PiSka = SuKa(4560) // Тут будет использована функция вычисления "SuKa" которую мы импортировали из первого js файла


/////////////////////////////////////////////////


export const pu = 3.44
export const E = 2.456

export const kvadrat = (x) => { 
  return x * x;
};

export const SuKa = (r) => {
  return = 3 * pu * kvadrat(r);
};


// Чтобы импортировать весь код, то в основном файле нужно везде перед функциями поставить export и снова написать import и назвать его используя 
import * as FormuliSka from "./furmuli"
const PiSka = FormuliSka.SuKa(4560)
