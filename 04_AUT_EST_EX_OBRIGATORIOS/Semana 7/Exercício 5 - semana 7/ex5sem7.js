function inputGener() {
    /*Getting the number of text fields*/
    var qtd = document.getElementById("quantidade").value;
    /*Generating text fields dynamically in the same form itself*/
    for(var i=0;i<qtd;i++) {
        var campoDeTexto = document.createElement("input");
        campoDeTexto.type = "number";
        campoDeTexto.value = "";
        document.getElementById('form').appendChild(campoDeTexto);
    }
}