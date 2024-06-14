//aula sobre manipulação de prototypes

//new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    //__proto__: object.prototype
};

const objB = {
    chaveB: 'B',
     //__proto__: objA
};

const objC = new Object()
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
//agora ObjB -> ObjA -> Object.prototype
Object.setPrototypeOf(objC, objB);    //setter
//agora ObjC -> ObjB -> ObjA -> Object.prototype
//console.log(objC.chaveA);
//console.log(Object.getPrototypeOf(objA)); // getter para ver o __proto__

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco  * (percentual /100))
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco  * (percentual /100))
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

//p1.desconto(10);
//p1.aumento(10);
p2.aumento(10)
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99,
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
});  //outra forma de criar object
//p3.preco = 100   //outra forma ou ja az la dentro como esta
p3.nome = 'Mesa'
p3.aumento(10);
console.log(p3);





