
// Estrutura para mudar a cor de forma randomizada
function myFunction() {
    $("#demo").css('color',getRandomColor());
    $("#demo").css('background',getRandomColor());       
};

// Estrutura para criar uma cor a partir de caracteres e números aleatórios
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  var getResDiv = "#get";
  var getDBResDiv = "#getDB";

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

/* Função que faz uma requisição GET */
function TestGETDB(){
  var url = "http://127.0.0.1:3071/users";
  var resposta;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  resposta = JSON.parse(xhttp.responseText);
  
  $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
  $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
  //console.log(xhttp.responseText);
}