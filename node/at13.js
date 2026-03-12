const prompt = require("prompt-sync")()
let salario = Number(prompt("Digite oo seu salário:"));
let bonus;
let novo;
if(salario<=2000){
    bonus = salario* 0.15
}
else if(salario<=5000){
    bonus = salario*0.10
}
else{
    bonus = salario*0.05
}
novo= salario + bonus
console.log(" O extra foi:" + bonus);
console.log("Seu novo salario" + novo)