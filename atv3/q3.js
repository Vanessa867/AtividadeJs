/* Depósito em Conta*/

function realizarDeposito(saldoAtual, valorDeposito) {
  saldoAtual += valorDeposito;
  console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
}
var deposito = new realizarDeposito(500, 800);