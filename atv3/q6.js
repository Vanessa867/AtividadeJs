/* Atualização de Cadastro*/

function atualizarCadastro(cadastroAtivo, saldo) {
  if (cadastroAtivo) {
    if (saldo > 0) {
      console.log("Cadastro ativo e saldo positivo");
    } else {
      console.log("Cadastro ativo mas precisa regularizar saldo");
    }
  } else {
    console.log("Por favor, atualize seu cadastro");
  }
}
var ativo = new atualizarCadastro(true, 1300);
var regularizar = new atualizarCadastro(true, -1300);
var atualizar = new atualizarCadastro(false, 1300);