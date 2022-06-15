// variavel global para o resultado
var result = 0

// funcao para colher numero digitado e separar a sequencia de numeros em digitos
function SumNumbers(){

// variavel que puxa do input o que o usuario digitar
    var stringNumbers = document.querySelector("#typedStringNumbers");

// variavel para converter string em integer
    var sNum = parseInt(stringNumbers.value);
    console.log(sNum);
    
// estrutura para armazenar a string de numeros em uma array
    let listOfNumbers = num => Number(num);

    var numArray = Array.from(String(sNum), listOfNumbers);
    
//estrutura for para somar os numeros da array
    for (var i in numArray) {
      result += numArray[i];
    }
    console.log(numArray);

// comando para permitir que o html acesse o valor da variável
    console.log(result)
    document.getElementById("result").innerHTML=result

}

// funcao para mostrar o resultado na forma mais reduzida da soma
function FurtherSumNumbers(){
    // var resultForArray = result
    var secondResult = 0
    // estrutura para ordenar a string de numeros em uma array
    let listOfNumbers = num => Number(num);

    var resultForArray = Array.from(String(result), listOfNumbers);
  
    
//estrutura for para somar os numeros da array
    for (var i in resultForArray) {
        secondResult += resultForArray[i];
    }
    console.log(secondResult)

    console.log(resultForArray);

    console.log(secondResult)
    document.getElementById("secondResult").innerHTML=secondResult
}