const prompt = require("prompt-sync")();
let peso = Number(prompt("Informe o peso:"));
let altura = Number(prompt("Informe a altura:"));
let imc = peso/(altura*altura)
if(imc < 18.5){
    console.log("Abaixo do peso!");
}
else if(imc>18.5 && imc<=24.9){
    console.log("Peso normal!");
}
else{
    console.log("Acima do peso!");
}
