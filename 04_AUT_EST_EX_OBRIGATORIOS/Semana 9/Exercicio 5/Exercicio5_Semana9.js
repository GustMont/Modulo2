//Implementação que indique os números primos entre dois numeros indicados

//instanciacao da funcao primeNumbers()
function primeNumbers(){

    //puxando as informacoes do input do html colocando em variaveis locais da funcao
    var inicialNumberInJS = document.getElementById('inicialNumber').value
    var finalNumberInJS = document.getElementById('finalNumber').value

    //array para armazenar resultados
    var resultArray = []

    //variavel utilizada para navegar pela array
    var j = 0

    //estrutura for para aplicar o valor máximo do intervalo
    for(var i = 1; i <= finalNumberInJS; i++){
        console.log("i "+i)

        // estrutura if para verificar se o número da var i é primo
        if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0 && i != 1){
           
            console.log("j "+j)

            // se o numero for primo ele será armazenado na posicao da var j com o valor da var i 
           if(i >= inicialNumberInJS){
            resultArray[j] = i

            // var j vai ser incrementada para avancar a posicao da array
            j++
            }
        }
    }

    
    
    console.log("inicialNumberInJS "+inicialNumberInJS)
    console.log("finalNumberInJS "+finalNumberInJS)
    console.log("resultArray "+resultArray)

    //comando para permitir o html acessar o valor da variavel
    document.getElementById("result").innerHTML=resultArray


}