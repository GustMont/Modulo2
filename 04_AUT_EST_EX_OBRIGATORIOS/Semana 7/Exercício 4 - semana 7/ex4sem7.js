function calc(){

    // variavel que puxa do input o que o usuario digitar
    var quantidade = document.querySelector("#quantidade")
   
    // variavel para converter string em integer
    var q = parseInt(quantidade.value);
    var resultado
    var desconto

    // variável para puxar a escolha do input
    var periodo = document.querySelector('input[name="periodoSelec"]:checked').value;
 
    // estrutura para verificar opção escolhida
    if (periodo=="diurno"){
        resultado = q * 200;
    }
    else {
        resultado = q * 100;
    }

    // estrutura if para verificar valor para desconto
    if(q >= 50){
        if(periodo=="diurno"){
            desconto = resultado * 0.4
            resultado = resultado - desconto
        }
        else {
            desconto = resultado * 0.2
            resultado = resultado - desconto
        }

    }

    var mostra = "R$" + resultado 

    document.getElementById("mostra").innerHTML=mostra
}