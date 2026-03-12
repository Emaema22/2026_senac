const prompt = require("prompt-sync")();

let a = Number(prompt("Informe lado A: "));
let b = Number(prompt("Informe lado B: "));
let c = Number(prompt("Informe lado C: "));
if((A==B) && (A==C)){
    console.log("Equilátero");
}
else if((a+b>c) && (a+c>b) && (b+c>a)){
    console.log("Escaleno")
}
else if((a == b) || (a == c) && (b == c)){
    console.log("Isósceles")
}
else{
    console.log("Inválido!");
}
