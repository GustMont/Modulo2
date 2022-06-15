//Implementação de uma função para gerar uma sequencia de fibonacci

//instanciacao da funcao fibonacciNumbersGen
function fibonacciNumbersGen(){

    //puxando a informação do input do html colocando em uma variavel local da funcao
    var aNumberInJS = document.getElementById('aNumber').value

    console.log("aNumberInJS= "+aNumberInJS)

    //variavel para armazenar resultado em array
    var resultArray= []

    //variaveis usadas para o calculo da formula
    var numOne = 1
    var numTwo = 0
    var numResult = 1
    var numExtra = 0


    //Armazena primeiro valor do cálculo da sequencia
     resultArray[0] = numResult

    
    //estrutura for para realizar os calculos em sequencia
    //enquanto a var i for menor que aNumberInJS (numero maximo da sequencia); i vai incrementar +1
    for(var i = 1; i < aNumberInJS; i++){

        console.log("i= "+i)

        //variavel numResult recebe o valor do calculo
        numResult = (numOne + numTwo)

        //array vai armazenar resultados em sequecia usando a incremetacao do i
        resultArray[i] = numResult

        //variaveis numTwo e numOne recebem os novos valores para seguir a sequencia do calculo
        numExtra = numTwo
        numTwo = numOne
        numOne = numResult

        console.log("numOne= "+numOne)
        console.log("numTwo= "+numTwo)
        console.log("numResult= "+numResult)

    }

    console.log("resultArray= "+resultArray)
    
    //comando para permitir o html acessar o valor da variavel
    document.getElementById("result").innerHTML=resultArray
}