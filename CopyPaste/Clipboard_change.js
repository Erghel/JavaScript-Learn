document.getElementById('copy').addEventListener('copy', function(e) { 
  e.clipboardData.setData('text/plain', ''); // Во вторые кавычки мы вставляем ссылку, код или что-то иное, что нам нужно
  e.preventDefault(); 
});
