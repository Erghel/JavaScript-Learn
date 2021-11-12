// Проверка пароля перед входом на сайт (simple)
//

let password = "1234";

function checkPassword(inputPassword) {
  return password === inputPassword;
}

if (checkPassword(prompt("Enter password"))) // Вместо inputPassword, здесь его значение будет равно тому, которое мы введем в всплывающем окне 
  alert("Пароль верный");
} 
else {
  alert("Пароль неверный, попробуй еще");
}
