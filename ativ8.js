var readline = require('readline-sync');

function somatorio(numero) {
    numero == 1 ? numero + 1 : somatorio(numero - 1);
    
    
}

let numero = readline.question('Digite um numero inteiro qualquer: ');
console.log(somatorio(numero))
//dois
var readline = require('readline-sync');

function fracionario(numero) {

    return numero === 1 ? 1 : 1 / numero + fracionario(numero - 1) 

}

let numero = Number(readline.question('Digite um numero inteiro qualquer: ')); 
console.log(fracionario(numero))
//treis
var readline = require('readline-sync');

function multiplicacao(x , k) {

    return k == 1 ? x : x *= multiplicacao(x, k - 1)
    
}


let x = Number(readline.question('Digite um valor inteiro de X qualquer: ')); 
let k = Number(readline.question('Digite um numero inteiro de K qualquer: ')); 

console.log(multiplicacao(x, k))
//quatro
var readline = require('readline-sync');


function tribonacci(n) {
    return n === 0 ||  n === 1 ? 0 : n === 2 ? 1 : tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}


function imprimirTribonacci(n) {
    let sequencia = "";
    for (let i = 0; i < n; i++){
        i === n - 1 ? sequencia += tribonacci(i) : sequencia += tribonacci(i) + ", "
    }

    return sequencia
}

let numero = Number(readline.question('Digite um numero inteiro: '));

console.log(imprimirTribonacci(numero))
//cinco
var readline = require('readline-sync');

function pell(n) {
    return n === 0 ? 0 : n === 1 ? 1 : 2 * pell(n - 1) + pell(n - 2)
}

function imprimirPell(n) {
    let sequencia = "";
    for (let i = 0; i < n; i++){
        i === n - 1 ? sequencia += pell(i) : sequencia += pell(i) + ", "
    }

    return sequencia
}

let numero = Number(readline.question('Digite um numero qualquer inteiro: '));

console.log(imprimirPell(numero))
