/*Limite de Crédito*/

function avaliarCredito(saldo, historicoCredito, rendaMensal) {
  if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
    console.log("Crédito aprovado");
  } else {
    console.log("Crédito negado");
  }
}
var aprovado = new avaliarCredito(1300, true, 3900);
var negado = new avaliarCredito(1300, false, 1000);