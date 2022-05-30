

function calcular() {

    var prime = document.querySelector("#primeiro")
    var segun = document.querySelector("#segundo")
    
    var p = parseInt(prime.value);
    var s = parseInt(segun.value);
    var operador = document.querySelector('input[name="escolhaCalc"]:checked').value;
    var resultado 
    if (operador=="soma"){
        resultado = p + s;
    }
    else if (operador=="subtracao"){
        resultado = p - s;
    }
    else if (operador=="multiplicacao"){
        resultado = p * s;
    }
    else if (operador=="divisao"){
        resultado = p / s;
    }

    else{
        resultado = p%s
    }
document.getElementById("mostrarResultado").innerHTML=resultado
console.log(resultado);
console.log(operador);
}