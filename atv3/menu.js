//um//
    function verificarSaldo(saldo) {
        if (saldo > 0) {
            console.log("Saldo positivo");
            } else {
            console.log("Saldo negativo");
            }
            
        }
    //dois//
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
    //três//
    function realizarDeposito(saldoAtual, valorDeposito) {
        saldoAtual += valorDeposito;
        console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
      }
    //quatro//
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
    //cinco//
    function checarChequeEspecial(saldo) {
        if (saldo < 0) {
            console.log("Dentro do limite do cheque especial");
        } else {
            console.log("Fora do limite do cheque especial");
        }
    }
    //seis//
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
      //sete//
    function avaliarCredito(saldo, historicoCredito, rendaMensal) {
        if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
        console.log("Crédito aprovado");
        } else {
        console.log("Crédito negado");
        }
    }

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    // Função principal
    function main() {
        let saldoAtual = 1000; // Saldo inicial, apenas para exemplo
        let saqueAtual =400;
        
        console.log("Bem-vindo ao banco!");
    
        // Chama a função para exibir o menu pela primeira vez
        exibirMenu();
    }
    
    // Função para exibir o menu
    function exibirMenu() {
        console.log("\nEscolha uma opção:");
        console.log("1. Verificar saldo");
        console.log("2. Realizar saque");
        console.log("3. Realizar depósito");
        console.log("4. Realizar transferência");
        console.log("5. Checar limite do cheque especial");
        console.log("6. Atualizar cadastro");
        console.log("7. Avaliar crédito");
        console.log("0. Sair");
    
        // Solicitação de entrada do usuário
        readline.question("Digite o número correspondente à ação desejada ou '0' para sair: ", function(opcao) {
            switch (opcao) {
                case '1':
                    console.log(verificarSaldo(saldoAtual));
                    break;
                case '2':
                    readline.question("Digite o valor do saque: ", function(valorSaque) {
                        console.log(realizarSaque(saldoAtual, parseFloat(valorSaque)));
                        exibirMenu();
                    });
                    break;
                case '3':
                    readline.question("Digite o valor do depósito: ", function(valorDeposito) {
                        console.log(realizarDeposito(saldoAtual, parseFloat(valorDeposito)));
                        exibirMenu();
                    });
                    break;
                case '4':
                    readline.question("Digite o saldo da origem: ", function(saldoOrigem) {
                        readline.question("Digite o saldo do destino: ", function(saldoDestino) {
                            readline.question("Digite o valor da transferência: ", function(valorTransferencia) {
                                readline.question("Digite o limite de transferência: ", function(limiteTransferencia) {
                                    console.log(realizarTransferencia(parseFloat(saldoOrigem), parseFloat(saldoDestino), parseFloat(valorTransferencia), parseFloat(limiteTransferencia)));
                                    exibirMenu();
                                });
                            });
                        });
                    });
                    break;
                case '5':
                    console.log(checarChequeEspecial(saldoAtual));
                    exibirMenu();
                    break;
                case '6':
                    readline.question("O cadastro está ativo? (S/N): ", function(respostaCadastro) {
                        const cadastroAtivo = respostaCadastro.toUpperCase() === 'S';
                        console.log(atualizarCadastro(cadastroAtivo, saldoAtual));
                        exibirMenu();
                    });
                    break;
                case '7':
                    readline.question("Possui histórico de crédito? (S/N): ", function(respostaCredito) {
                        const historicoCredito = respostaCredito.toUpperCase() === 'S';
                        readline.question("Digite sua renda mensal: ", function(rendaMensal) {
                            console.log(avaliarCredito(saldoAtual, historicoCredito, parseFloat(rendaMensal)));
                            exibirMenu();
                        });
                    });
                    break;
                case '0':
                    console.log("Saindo...");
                    readline.close(); // Fecha a interface de leitura
                    break;
                default:
                    console.log("Opção inválida.");
                    exibirMenu();
            }
        });
    }
    
    // Chamada da função principal para iniciar o programa
    main();
    
