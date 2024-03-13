/*Cheque Especial*/

function checarChequeEspecial(saldo) {
    if (saldo < 0) {
        console.log("Dentro do limite do cheque especial");
    } else {
        console.log("Fora do limite do cheque especial");
    }
}
var fora = new checarChequeEspecial(2000);
var Dentro = new checarChequeEspecial(-150);