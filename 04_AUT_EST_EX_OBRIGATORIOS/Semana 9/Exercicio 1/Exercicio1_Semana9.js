function ParOuImpar(){
 // variavel que puxa do input o que o usuario digitar
    var num = document.querySelector("#numeroDigi");
    var cem = 0
    var result 
 // variavel para converter string em integer
    var n = parseInt(num.value);
    console.log(n);

    while (n >= 100){
        n -= 100;
        cem += 1;
    }
    console.log(cem);

    if (cem % 2 == 0){
        result = cem + " é par!";
    }
    else {
        result = cem + " é impar!"
    }
    console.log(result)
    document.getElementById("result").innerHTML=result
}