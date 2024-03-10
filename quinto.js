/*Simulador de caixa eletrônico*/

const sacar = parseFloat(prompt('Quanto em dinheiro você dejesa sacar: '));

if (sacar %10 == 0){
    console.log('Saque realizado com sucesso!')
}else{
    console.log('Valor inválido. Digite um valor múltiplo de 10')
}