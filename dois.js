/*jogo de adivinhação*/

var numero = Math.floor(Math.random() * 100) + 1;

const adivinhar = parseInt(prompt('Pense em um número de 1  a 100 e tente adivinha o número secreto'));

while(adivinhar !== numero){

    if(adivinhar > numero){
        alert('o número secreto é menor');
    }else{
        alert('o número secreto é maior');
    
    }
    const adivinhar = parseInt(prompt('Pense em um número de 1  a 100 e tente adivinha o número secreto'));

    alert('Parabéns! você acertou o número secreto');
}