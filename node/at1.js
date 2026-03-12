const promt = require("prompt-sync")()

let numero = Number(promt("Informe o número:"))
if(numero % 2 == 0){
    console.log("PAR");
}
else{
    console.log("Ímpar");7
}