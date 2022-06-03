
// funcao para somar +1
function maisUm() {

    var prime = document.querySelector("#numero")
    
    var p = parseInt(prime.value)

    var resultado = p
    prime = resultado + 1

document.getElementById("mostrarResultado").innerHTML=prime
console.log(prime);

}

// funcao para diminuir -1
function menosUm() {

    var prime = document.querySelector("#numero")
    
    var p = parseInt(prime.value)

    var resultado = p
    prime = resultado - 1

document.getElementById("mostrarResultado").innerHTML=prime
console.log(prime);

}