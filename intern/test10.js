// Обработчик события


let message = document.querySelector('.subscription-message');

let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
message.textContent = 'Форма отправлена!'
};


// Нажимая на кнопку "Подписаться" которой присвоен класс "subscrption" у нас меняется надпись в строке над формой заполнения на "Форма отправлена!"
