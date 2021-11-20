// Обработчик события


let message = document.querySelector('.subscription-message');

let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
message.textContent = 'Форма отправлена!'
};


// Нажимая на кнопку "Подписаться" которой присвоен класс "subscrption" у нас меняется надпись в строке над формой заполнения на "Форма отправлена!"


// Вывод веденного значения 
form.onsubmit = function(evt) {
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  message.textContent = email.value;
};
// Выведет нам сверху над кнопкой вместо текста то, что мы ввели в поле ввода, в случае, как на курсе, это будет ваша почта



let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};
// Выведет текст с указанием вашей почты 
