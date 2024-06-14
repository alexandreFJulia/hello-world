/*aula prototipo
Javascript é bseado em prototipos para passar propriedades e metodos de um objeto para outro.

definicao de prototipo:
protótipo é um termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo
ou molde para futuras produções.

Todos os objetos tem uma referencia interna para os prototipos ( [[Prototype]]) que vem da propiedade prototype
da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro
o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada
até o topo (null) até encontrara (ou não) tal membro. 
*/

//construction -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
 //   this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; //cada pessoa criada criara um novo metodo ocupando memoria e piorando performance
};

Pessoa.prototype.estouaqui = 'hahahahahhhaha' //como criar um prototype de uma funçao
Pessoa.prototype.nomeCompleto = function () {
 return this.nome + ' ' + this.sobrenome;  // assim nao duplica o metodo pra cada classe criada porem se tiver dentro do objeto vai pegar o de dentro
};
//instancia - criar uma instancia da funcao construtora
const pessoa1 = new Pessoa('Alexandre', 'Juliá'); // <- pessoa = funcao construtora
const pessoa2 = new Pessoa('Maria', 'Luiza');  // <- pessoa = funcao construtora

const data = new (Date);   // a Date usa um prototipo para nao duplicar os metodos no programa...

console.dir(pessoa1);   //para ver no navegador e nao so no console log
console.dir(pessoa2);
console.dir(data);

//o prototype obedece  seguinte sequencia no exemplo da data
//data -> Date.prototype -> Object.prototype

//o prototype obedece  seguinte sequencia no exemplo da pessoa
//pessoa1 -> Pessoa.prototype -> Object.prototype
