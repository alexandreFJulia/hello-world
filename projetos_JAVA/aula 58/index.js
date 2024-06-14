//funções construtoras unica diferença da função fabrica eh que a fabrica retorna um objeto
//a construtora faz um monte de coisa automaticamente
//construora -> muda como escreve a funcao algumas regras
//funcao construtora começa com letra Maiuscula e tem a palavra (new)

function Pessoa(nome, sobrenome) {
    //variaveis ou atributos privados
    const ID = 123456;
    const metodoInterno = function() {

    }
     //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome+ ' : Sou um Metodo');
    };
}

const p1 = new Pessoa('Alexandre', 'Julia');    //sempre uasr a palavra new paara funcao Construtora
const p2 = new Pessoa('Maria', 'Luiza');

console.log(p1.nome);
p2.metodo();


