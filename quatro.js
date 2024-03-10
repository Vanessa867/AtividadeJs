/*Classificador de triângulos:*/

let lado1 = parseFloat(prompt('Digite o 1° lado do triângulo: '));
let lado2 = parseFloat(prompt('Digite o 2° lado do triângulo: '));
let lado3 = parseFloat(prompt('Digite o 3° lado do triângulo: '));

if(lado1+ lado2 > lado3){
    alert('Válido!')
}else if(lado2 + lado3 > lado1){
    alert('Válido!')
}else if (lado1 + lado3 > lado2){
    alert('Válido!')
}else{
    alert('Inválido')
}
console.log('Classificação do triângulo: ')

if (lado1 == lado2 && lado2 == lado3){
    alert("esse triângulo é equilátero")
}else if (lado1 !== lado2 && lado2 !== lado3){
    alert('esse triangulo é escaleno')
}else{
    alert('esse triangulo é isósceles')
}