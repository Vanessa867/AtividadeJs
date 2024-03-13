/* Saque em Conta*/

function realizarSaque(saldoAtual, valorSaque) {

    this.clacularsaque = function(){
        if (valorSaque <= saldoAtual) {
            saldoAtual -= valorSaque;
            console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
}
var saque1 = new realizarSaque(1000, 500);
saque1.clacularsaque();
