/*Transferência Entre Contas */

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
        saldoOrigem -= valorTransferencia;
        saldoDestino += valorTransferencia;
        console.log("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
        console.log("Saldo insuficiente para transferência");
    } else {
        console.log("Valor excede o limite de transferência");
    }
}
var sucesso = new realizarTransferencia(1300, 5000, 300, 1000);
var insuficiente = new realizarTransferencia(1300, 5000, 1500, 2000);
var limite = new realizarTransferencia(1300, 5000, 1000, 500);