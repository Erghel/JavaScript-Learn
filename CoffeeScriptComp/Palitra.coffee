Pal = (color1, color2) ->
  if color1 == 'к' and color2 == 'с'
    'Фиолетовый'
  else if color1 == 'с' and color2 == 'к'
    'Фиолетовый'
  else if color1 == 'к' and color2 == 'к'
    'Красный'
  else if color1 == 'к' and color2 == 'к'
    'Красный'
  else if color1 == 'к' and color2 == 'ж'
    'оранжевый'
  else if color1 == 'ж' and color2 == 'к'
    'оранжевый'
  else if color1 == 'ж' and color2 == 'ж'
    'желтый'
  else if color1 == 'ж' and color2 == 'ж'
    'желтый'
  else if color1 == 'с' and color2 == 'ж'
    'зеленый'
  else if color1 == 'ж' and color2 == 'с'
    'зеленый'
  else if color1 == 'с' and color2 == 'ж'
    'зеленый'
  else
    'Введите релевантное значение'

console.log Pal('к', 'к')
# должен вывести Красный
