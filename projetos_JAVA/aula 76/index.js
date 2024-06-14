// aula sobre herança


//produto
//camiseta pode ter cor , lapis, caneca pode ser de diferentes materias, mesa
//possibilidade de aumento de preço e de desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;                     // nao usar arrow function em prototype pq ele nao muda o this...
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;                     // nao usar arrow function em prototype pq ele nao muda o this...
};

function Camiseta(nome, preco, cor) {        //camiseta herda tudo de produto e adiciona mais o cor...
    Produto.call(this, nome, preco);
    this.cor = cor;
};
// Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco  = this.preco + (this.preco * (percentual/100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Harry', 13, 'Plastico',5);

caneca.estoque =100;

camiseta.aumento(10);
console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);
console.log(produto);

/*
Herança?
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Mais especificamente no trecho:

Camiseta.prototype = Object.create(Produto.prototype);

Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. 
Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. 
Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para 
Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo
 o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.


*/





