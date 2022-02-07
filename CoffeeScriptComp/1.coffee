OnClick = ->
  name = prompt('Введите имя: ', '')
  age = prompt('Введите возраст', '')
  if age == 17 and name == 'Ivan'
    alert 'Правильно'
  else
    alert 'Мда, следующий'
  return
