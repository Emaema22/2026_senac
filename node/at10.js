const prompt = require("prompt-sync")()
let n1 = Number(prompt("Preço"));
if(n1<=50){
    console.log("Barato")
}
else if(n1<200){
    console.log("Razoavel");
}
else{
    console.log("Premium");
}