// 1-Função para exibir uma mensagem de boas-vindas personalizada
function exibirMensagemBoasVindas() {
    
    var mensagens = [
        "Bem-vindo!",
        "Olá, que bom te ver por aqui!",
        "Oi! Seja bem-vindo à nossa página.",
        "Ei! Que alegria ter você aqui!"
    ];
    var mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    console.log(mensagem);
}
window.onload = exibirMensagemBoasVindas;

//2-função que receba um número como parâmetro e verifique se ele é par ou ímpar. 
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarParOuImpar(3));  
console.log(verificarParOuImpar(6));  

// 3- Função para calcular a média aritmética de um array de números
function calcularMediaAritmetica(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}
console.log(calcularMediaAritmetica([4, 6, 8])); 
function converterParaCaixaAlta(string) {
    return string.toUpperCase();
}
console.log(converterParaCaixaAlta("Olá Mundo")); 

// 5- Função para verificar se um número é primo
function verificarPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
console.log(verificarPrimo(17));

// 6- Função para inverter a ordem dos elementos em um array
function inverterArray(array) {
    return array.reverse();
}
console.log(inverterArray([1, 2, 3])); 

// 7- Função para calcular o valor acrescido de uma porcentagem
function valorComPorcentagem(valor, porcentagem) {
    return valor * (1 + porcentagem / 100);
}
console.log(valorComPorcentagem(100, 10)); 

// 8- Função para verificar se uma palavra é um palíndromo
function verificarPalindromo(palavra) {
    const reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
}
console.log(verificarPalindromo("arara")); 

// 9- Função para converter um número para sua representação binária
function representacaoBinaria(numero) {
    return numero.toString(2);
}
console.log(representacaoBinaria(10));

// 10- Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(calcularFatorial(5)); 

