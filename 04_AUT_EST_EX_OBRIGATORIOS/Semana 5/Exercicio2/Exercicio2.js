 

   function calcularNotas() {
 
    var preco = document.querySelector("#preco")
    var cem = 0
    var cinquenta = 0
    var vinte = 0
    var dez = 0
    var cinco = 0
    var dois = 0
    var um = 0
    var p = parseInt(preco.value);
    document.getElementById("preco").value
       while (p >= 100){
           p -= 100;
           cem += 1;
       }
       while (p >= 50){
           p -= 50;
           cinquenta += 1;
       }
       while (p >= 20){
           p -= 20;
           vinte += 1;
       }
       while (p >= 10){
           p -= 10;
           dez += 1;
       }
       while (p >= 5){
           p -= 5;
           cinco += 1;
       }
       while (p >= 2){
           p -= 2;
           dois += 1;
       }
       while (p >= 1){
           p -= 1;
           dois += 1;
       }
       var mostra = cem +" notas de cem, "+ cinquenta+" notas de cinquenta, "+ vinte+" notas de vinte, "+dez+" notas de dez, " +cinco+" notas de cinco, " +dois+" notas de dois, "+ um+" notas de um."    

       document.getElementById("mostra").innerHTML=mostra
    }