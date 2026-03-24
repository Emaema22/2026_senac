const prompt = require("prompt-sync")()
let i ;
let nome;
let idade;

let soma = 0;
let nota = 0;
let media =0;
for(i=0; i<3; i++){
    nome=prompt("Informe o nome do usuario: ")
    idade=Number(prompt("Informe a idade: "))
    soma= soma+ idade;
}
media = soma/3;
console.log("A média é:"+ media);

if(idade >=18){
    console.log("maior de idade");
}
else{
    console.log("Menor de idade");

}
