
// funcao que troca os textos
function trocaTexto() {
  
    // cada variavel colhe as strings respectivas de cada input
    var texto1 = String(document.querySelector("#t1").value);
    var texto2 = String(document.querySelector("#t2").value);

    // cada uma das estruturas inverte o valor do texto e retorna
    document.getElementById('t1').value = texto2;
    document.getElementById('t2').value = texto1;
  }