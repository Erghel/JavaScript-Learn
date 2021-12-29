let name = prompt("Ваше имя?", "");
    const clientsnames = name;
/// Такая же по назначению функция, просто я ее немного доработал ниже
  /**button.onclick = function () {
    alert(`привет, ${clientsnames}`);
  }*/

  function saymyname(){
    console.log(clientsnames);
    alert(`привет, ${clientsnames}`);
  }
  button.onclick = saymyname;
