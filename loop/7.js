const prompt = require("prompt-sync")();
let i ;
let numero;
let maior = 0;
let par
for(i=0; i<=8; i++){

    numero= Number(prompt("Informe o  número: "));
    if(i % 2==0){
        console.log("Par") ;
}
else{
    console.log("Impar")

}
}
