document.getElementById('copy').addEventListener('copy', function(e) { 
  e.clipboardData.setData('text/plain', 'ССЫЛКА ИЛИ КОД ИЛИ ЧТО УГОДНО'); 
  e.preventDefault(); 
});
