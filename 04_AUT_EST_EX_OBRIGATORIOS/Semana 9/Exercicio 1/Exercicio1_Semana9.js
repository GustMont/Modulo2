function ParOuImpar(){
 // variavel que puxa do input o que o usuario digitar
    var num = document.querySelector("#numeroDigi");
    var cem = 0
    var result 
 // variavel para converter string em integer
    var n = parseInt(num.value);
    console.log(n);

    // estrutura while para subtrair o valor apenas da centena
    while (n >= 100){
        n -= 100;
        cem += 1;
    }
    console.log(cem);

    // estutura para identificar se o número da variável é par ou ímpar
    if (cem % 2 == 0){
        result = cem + " é par!";
    }
    else {
        result = cem + " é impar!"
    }

    // comando para permitir que o html acesse o valor da variável
    console.log(result)
    document.getElementById("result").innerHTML=result
}