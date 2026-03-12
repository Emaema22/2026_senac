const prompt = require("prompt-sync")();
let texto = "Informe o horário:";
let horario = Number(prompt(texto))
if((horario>=8) && (horario <=18)){
    console.log("Horário comercial");
}
else{
    console.log("Estabeleciemnto fechado!");
}
