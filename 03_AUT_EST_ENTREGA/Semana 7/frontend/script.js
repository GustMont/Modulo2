  function myFunction() {
    // document.getElementById("demo").style.fontSize = "25px"; 
    $("#demo").css('color',getRandomColor());
    $("#demo").css('background',getRandomColor());       

  };

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var getResDiv = "#get";

  /* Função que faz uma requisição GET */
function TestGET(){
  var url = "https://jsonplaceholder.typicode.com/todos/1";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  $(getResDiv).append("<br />" + xhttp.responseText);
  $(getResDiv).append("<br />Seleção do <i>title</i>: " + JSON.parse(xhttp.response).title);
  //console.log(xhttp.responseText);
}