// Скрипт для удаления iframe окон YouTube на страницах 
let iframe = $("iframe");

if (iframe.attr("src").split("youtube").length > 1) {
  iframe.remove();
}

// Для использования этого скрипта в расширении - понадобится подключить библиотеку JQuery 
  
