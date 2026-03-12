const prompt = require("prompt-sync")();
let compra = Number(prompt("Qual é valor da compra:"))
let desconto = (valor * 10)/100;
if(compra>=100){
    console.log("Desconto de 10%")
    console.log("Valor desconto" + desconto)
}
else{
    console.log("Não tem desconto");
}
