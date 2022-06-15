//Implementação de uma estrutura de ordenação no formato Bubble Sort

//Criando a função para o Bubble Sort
function SortNames() {
    
    // variavel que puxa do input o que o usuario digitar e coloca em uma Array
    var arrayOfNames = [document.getElementById('firstName').value, document.getElementById('secondName').value, document.getElementById('thirdName').value];
    
    console.log(arrayOfNames)


    for(var i = 0; i < arrayOfNames.length; i++){
        
        // Os elementos da var i estão colocados
        for(var j = 0; j < ( arrayOfNames.length - i -1 ); j++){
            
        // Checando se o item atual da iteração atual é maior que o da próxima iteração
        if(arrayOfNames[j] > arrayOfNames[j+1]){
            
            // Se a condição for verdadeira, é feita a troca
            var temp = arrayOfNames[j]
            arrayOfNames[j] = arrayOfNames[j + 1]
            arrayOfNames[j+1] = temp
        }
        }
    }
    console.log(temp)
    console.log(arrayOfNames)

    document.getElementById("result").innerHTML=arrayOfNames

    
}