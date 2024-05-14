var readline = require('readline-sync');

// Função construtora do objeto aluno contendo ID, Nome e Nota.
function Aluno(id, nome, nota) {
    this.id = id,
    this.nome = nome,
    this.nota = nota
}

// Função para listar todos os alunos
function mostrarAlunos(conjAlunos) {

    if (conjAlunos.length == 0) {
        console.log('Nao tem alunos para mostrar!');

    } else {

        console.log('-'.repeat(10) + 'Alunos' + '-'.repeat(10));

        for (let aluno of conjAlunos) {
            console.log(`ID: ${aluno.id}, Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
        }

    }

    
}

// Função para calcular a média dos alunos, uso a função mostrarAlunos
// para listar os alunos deixando o visual mais organizado.
function media(conjAlunos) {

    if (conjAlunos.length == 0) {
        
        console.log('Não tem alunos para calcular a media das notas.');
    
    } else {

        let media, soma = 0;

        for (let aluno of conjAlunos) {
            soma += aluno.nota;
        }

        console.log(mostrarAlunos(conjAlunos));
        console.log();

        media = soma / conjAlunos.length;

        console.log(media);
    }
    
    
}

// Função para adicionar alunos, nessa função eu verifico se conjAlunos está
// vazio caso esteja adiciono o aluno na primeira posição, caso já conjAlunos
// já esteja preenchido com algum aluno , insiro o aluno na ultima posição.
function addAluno() {

    id = readline.question('Digite o id do aluno: ');
    nome = readline.question('Digite o nome do aluno: ');
    nota = Number(readline.question('Digite a nota do aluno: '));

    conjAlunos.length === 0 ? conjAlunos[0] = new Aluno(id, nome, nota):
    conjAlunos[conjAlunos.length] = new Aluno(id, nome, nota);

}

// Função para buscar alunos, aqui novamente eu verifico se conjAlunos
// está preenchido, caso não mostro um aviso, caso sim faço a busca pelo ID 
// e caso não encontre o aluno mostro outro aviso.
function buscaAluno(conjAlunos) {

    if (conjAlunos.length === 0) {

        console.log('Não tem alunos para buscar.');

    } else {

        id = readline.question('Digite o id do aluno para buscar: ');

        for (let aluno of conjAlunos) {

            if(aluno.id === id) {

                return `ID: ${aluno.id}, Nome: ${aluno.nome}, Nota: ${aluno.nota}`

            }
            
        }

    }
    
    return '\nAluno nao encontrado!'
}

let conjAlunos = [];
let id, nome, nota, opcao = 'sim';

do {
    
    console.log('\n');
    console.log('*'.repeat(20));
    console.log('\tMENU');
    console.log('*'.repeat(20));

    console.log('1 - Inserir aluno');
    console.log('2 - Buscar aluno');
    console.log('3 - Mostrar alunos');
    console.log('4 - Calcular media dos alunos') 
    console.log('5 - Sair\n');   

    opcao = readline.question('Digite a opcao desejada: ').toLowerCase()
    console.log();

    opcao == '1' ? addAluno() : opcao == '2' ? console.log(buscaAluno(conjAlunos)): 
    opcao == '3' ? mostrarAlunos(conjAlunos) : opcao == '4' ? media(conjAlunos): opcao = '5'

    

} while (opcao != '5');
// p2
var readline = require('readline-sync');

// Função quase construtora, ou seja cria Objetos alunos, lembrando que quando insiro
// chaves ou keys iguais ao que já tem em conjAlunos, o novo Objeto definido com a chave
// existente substitui oque tinha a mesma chave :). 
function Alunos(id, nome , nota) {
    conjAlunos[`${id}`] = {'nome' : nome, 'nota' : nota}

    return conjAlunos
}

// Função para adicionar alunos, nessa função eu verifico se conjAlunos está
// vazio caso esteja adiciono o aluno na primeira posição, caso já conjAlunos
// já esteja preenchido com algum aluno , insiro o aluno na ultima posição.
function addAluno() {

    id = readline.question('Digite o id do aluno: ');
    nome = readline.question('Digite o nome do aluno: ');
    nota = readline.question('Digite a nota do aluno: ');

    Alunos(id, nome, nota);

}

// Função para listar todos os alunos.
function mostrarAlunos(conjAlunos) {

    if (Object.keys(conjAlunos).length == 0) {
        console.log('Nao tem alunos para mostrar!');

    } else {

        console.log('-'.repeat(10) + 'Alunos' + '-'.repeat(10));

        for (let id of Object.keys(conjAlunos).sort()) {
            console.log(`ID: ${id}, Nome: ${conjAlunos[id].nome}, Nota: ${conjAlunos[id].nota}`);
        }

    }

    
}

// Função que calcula a média dos alunos, a função apresenta a lista
// de alunos e em seguida apresenta a média deles.
function media(conjAlunos) {

    if (Object.keys(conjAlunos).length == 0) {
        
        console.log('Não tem alunos para calcular a media das notas.');
    
    } else {

        let media, soma = 0;

        for (let id of Object.keys(conjAlunos).sort()) {
            soma += Number(conjAlunos[id].nota);
        }

        mostrarAlunos(conjAlunos);
        console.log();
        
        // Optei por usar Object.keys que retorna um Array / Lista 
        // contendo as chaves do Objeto Aluno, pra facilitar um pouco pois já usava algo parecido
        // em python.
        media = soma / Object.keys(conjAlunos).length;

        console.log(`Media dos alunos: ${media}`);
    }
    
    
}

// Função para buscar alunos, aqui novamente eu verifico se conjAlunos
// está preenchido, caso não mostro um aviso, caso sim faço a busca pelo ID 
// e caso não encontre o aluno mostro outro aviso.
function buscaAluno(conjAlunos) {

    if (Object.keys(conjAlunos).length === 0) {

        console.log('Não tem alunos para buscar.');

    } else {

        id = readline.question('Digite o id do aluno para buscar: ');

        // Optei por usar Object.keys que retorna um Array / Lista 
        // contendo as chaves do Objeto Aluno.
        for (let aluno of Object.keys(conjAlunos)) {

            if(aluno === id) {

                return `ID: ${id} Nome: ${conjAlunos[aluno].nome}, Nota: ${conjAlunos[aluno].nota}`

            }
            
        }

    }
    
    return '\nAluno nao encontrado!'
}


// Aqui defino conjAlunos como um objeto que recebera Objetos Alunos.
let conjAlunos = {};

// Escolhi usar um do while , pois pretendo apresentar o menu ao menos uma vez
// para o usúario.
do {
    
    console.log('\n');
    console.log('*'.repeat(20));
    console.log('\tMENU');
    console.log('*'.repeat(20));

    console.log('1 - Inserir aluno');
    console.log('2 - Buscar aluno');
    console.log('3 - Mostrar alunos');
    console.log('4 - Calcular media dos alunos') 
    console.log('5 - Sair\n');   

    opcao = readline.question('Digite a opcao desejada: ').toLowerCase();
    console.log();

    opcao == '1' ? addAluno() : opcao == '2' ? console.log(buscaAluno(conjAlunos)): 
    opcao == '3' ? mostrarAlunos(conjAlunos) : opcao == '4' ? media(conjAlunos): opcao = '5'

    

} while (opcao != '5');
