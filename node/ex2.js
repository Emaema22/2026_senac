const prompt = require("prompt-sync")();

let a = Number(prompt("Informe lado A: "));
let b = Number(prompt("Informe lado B: "));
let c = Number(prompt("Informe lado C: "));
if(a>b + c){
    console.log("Forma um  triângulo");
}
else if(b<a + c){
    console.log("Forma um triângulo");
}
else{
    console.log("Forme um triângulo");
}
