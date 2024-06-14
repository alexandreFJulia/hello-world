
// aula atribuição via desestruturação para objetos


const pessoa ={
    nome: 'Alexandre',
    sobrenome: 'Julia',
    idade: 44,
    endereco: {
        rua: 'Alameda Beija Flor',
        numero: 155
    }
};

//  const nome = pessoa.nome   //jeito de fazer

//const { nome = '', sobrenome, idade, peso = 90 } = pessoa // isso eh atribuicao via desestruturaçao
//da pra trocar nome da chave como abaixo
//const { nome: n = '', sobrenome, idade} = pessoa // isso eh atribuicao via desestruturaçao

const {nome, ...resto} = pessoa;  //pra pegar o restante dos atributos usa ...e uma variavel pra respresentar o resto

const{ endereco: {rua: r, numero}, endereco} = pessoa;  // pode extrair tudo ou parte da chave neste casa tem os dois

//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(n, sobrenome, idade);
//console.log(r, numero);
//console.log(endereco);
console.log(resto);