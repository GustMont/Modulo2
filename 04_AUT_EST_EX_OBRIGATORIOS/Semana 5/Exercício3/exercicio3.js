function separar(){

    var numer = document.querySelector("#numeros")
    var resultadoSeparado = numer.split(",", 5); 
    var p = parseInt(resultadoSeparado.value);



    console.log(p);
}