// Вместо color1 и color2 пишем 2 значения обязательно используя "..." (как снизу в примере вывода в консоль) и сокращая название до 1 буквы
// Пока в палитре мало цветов, вот их список:
/**
* к - красный
* с - синий
* ж = желтый
* 
*
*
*
*
*
*/
// Палитра будет дополняться новыми цветами



const Pal = (color1, color2) => {
   
    if (color1 == "к" && color2 == "с") {
        return "Фиолетовый";  
    }  else if (color1 == "с" && color2 == "к") {
        return "Фиолетовый";  
    }  else if (color1 == "к" && color2 == "к") {
        return "Красный";  
    }  else if (color1 == "к" && color2 == "к") {
        return "Красный";  
    }  else if (color1 == "к" && color2 == "ж")  {
        return "оранжевый"; 
    } else if (color1 == "ж" && color2 == "к")  {
        return "оранжевый";
    } else if (color1 == "ж" && color2 == "ж")  {
        return "желтый"; 
    } else if (color1 == "ж" && color2 == "ж") {
        return "желтый"; 
    } else if (color1 == "с" && color2 == "ж") {
        return "зеленый"; 
    } else if (color1 == "ж" && color2 == "с")  {
        return "зеленый"; 
    } else if (color1 == "с" && color2 == "ж")  {
        return "зеленый"; 
    } else {
      return "Введите релевантное значение";
    } 
}

console.log(Pal("x", "y"))
//
