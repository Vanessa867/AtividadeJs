/* Calculadora IMC*/

const peso = prompt("Digite seu peso: ");
const altura = prompt("digite sua altura: ");
let imc = peso / (altura * altura);

    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        description = "Você está no peso ideal!";
    } else if (imc > 25 && imc <= 30){
        description = "Cuidado! Você está com Sobrepeso!";
    } else if (imc > 30 && imc <= 35){
        description = "Cuidado! Você está com obesidade grau I!";
    } else if (imc > 35 && imc <= 40){
        description = "Cuidado! Você está com obesidade grau II";
    } else {
        description = "Cuidado! Você está com obesidade grau III";
    }
