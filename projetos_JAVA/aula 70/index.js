//aula revisao de objetos

//sring literal '' "" ``
// array literal []
//objetos literais { }
//construtor new Array()  ou usa o coolchete []


//usando contrutor ao inves do literal
const pessoa2 = new Object();
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Luiza';
pessoa2.idade= 54;
pessoa2.peso = 50;
pessoa2.falarNome = function() {
    return (`${this.nome} está falando seu nome!!`);
};

pessoa2.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.getDataNascimento());
const pessoas = {
    chave: 'valor da chave',
    nome: 'Alexandre', // Alexandre eh o valor da chave nome
    idade:'45',
    peso:'90',
};

pessoa2.falarNome();

for (let chave in pessoa2) {
    console.log(pessoa2[chave]);
};

//factory function
function criaCliente(nome, sobrenome, idade, peso) {
    return{ 
        nome,
        sobrenome,
        idade,
        peso,
        get nomeCompleto () {
         return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaCliente('Cecilia', 'Fialho', 11, 25);
console.log(p1.nomeCompleto);

//constructior function

function Pessoa(nome, sobrenome, idade, peso) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idde = idade;
    this.peso = peso;
    Object.freeze(this); //travar todas as chaves do objetoo criado
};
//this.nome = Pessoa.nome = 'Pedro';
// {} <- this -> this
const p2 = new Pessoa('Pedro', 'Juliá', 19, 70);
delete p2.nome; //nao vai funcionar por causa do freeze no ojeto
Object.freeze(p2); //assim trava uma chave especifica do objeto para nao ser mudao
console.log(p2);


/*
const chave = 'nome';
console.log(pessoas.nome);
console.log(pessoas['nome']);  //mesma coisa da de cima
console.log(pessoas[chave]);   //igual mas de forma dinamica

console.log(pessoa2.nome);
console.log(pessoa2['nome']);  //mesma coisa da de cima
console.log(pessoa2[chave]);   //igual mas de forma dinamica



console.log(pessoa2);
delete pessoa2.nome;
console.log(pessoa2);
*/

