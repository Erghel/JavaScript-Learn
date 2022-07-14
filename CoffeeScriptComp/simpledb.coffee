Info = ->
  name1 = prompt('Как тебя зовут?', '')
  age1 = prompt('Сколько тебе лет?', '')
  student1 = prompt('Ты учишься?', '')
  info = 
    age: age1
    name: name1
    college: student1
  console.log info
  return
