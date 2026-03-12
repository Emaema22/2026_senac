const prompt = require("prompt-sync")()

let n1 = Number(prompt("Informe a 1 nota:"));
let n2= Number(prompt("Informe a 2 nota:"));

let media = (n1+n2)/2;
console.log("A média é:"+ media);

if(media >=7){
    console.log("Aprovado!")
}
else if(media>3 && media <=7 ){
    console.log("Em recuperação");
}
else{
    console.log("Reprovado!")
}