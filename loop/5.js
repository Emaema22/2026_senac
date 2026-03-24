const prompt = require("prompt-sync")();
let i = 0;
let soma  = 0;
let media = 0;
let nota = 0;
for(i=0; i<3; i++){
    nota = Number(prompt("Informe a nota:"));
    soma= soma+nota;
}
media = soma/3;
console.log("A soma total:"+ soma);
console.log("A média é::"+ media);
console.log("Quantidade de notas:"+3);
