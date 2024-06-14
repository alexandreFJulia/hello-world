//metodos uteis para objetos
//object.values
//Object.entries
//Object.assign(destino, any)
//Object.getOwnPropertyDescriptor(objeto, 'propriedade')
// ObjectGetownPropertydescriptr(produto, 'nome') 
//...spread

//ja vimos
//Object.keys() (retorna as chaves))
//Object.freeze() (congela o objeto) 
//Object.defineProperties (define varias propriedades)
//Object.definePrperty (define uma propriedade)


//desta forma qdo mudar um vai mudar o outro pois apontam pra mesma memoria
const produto = {nome: 'caneca', preco:'1.80'};
const produto2 = produto;
produto.nome = 'Camisa';
//console.log(produto2);

//formas de copiar um objeto de outro sem mandar pro mesmo lugar da memoria
//spread operator
//const produto3 = {...produto}; // pode adicionar outras chaves com virgula tipo
const produto3 = {...produto, material: 'Porcelana'}; // pode adicionar outras chaves com virgula igual aqui
produto.nome = 'Bermuda'; 
//console.log(produto);
//console.log(produto3);

//Object.assign eh outra maneira de duplicar objeto aontando pra outro lugar da memoria

//const produto4 = Object.assign({}, produto)  //cria um objeto vazio {} e coloca de quem copiar
const produto4 = Object.assign({}, produto, { material: 'Jeans'}); //terceiro argumento em diante podem ser novas chaves...
produto4.nome = 'Blusa'
produto4.preco = 20;

//console.log(produto);
//console.log(produto4);

//outra maneira eh fazer de forma literal como abaixo mas da mto mais trabalhao e precisa saber as chaves do objeto original

const produto5 = {nome: produto.nome, preco: produto.preco};
//console.log(produto);
//console.log(produto5);

//a funcao Object.keys mostra as chaves do ojeto
//pode jogar numa variavel e iterar neste array...
//console.log(Object.keys(produto));

//funcao Object.freeze congela o objeto para nao ser alterado no futuro
//Object.freeze(produto);   // congela objeto
//delete produto.nome; //tb nao fnciona por causa do freeze
//produto.nome = 'Computador';   //nao vai mudar por causa do freeze em cima
//console.log(produto);


// ObjectGetownPropertydescriptr(produto, 'nome') olha como estao as propriedades do objeto
//que podemos alterar no Object.porperty ou Properties...

Object.defineProperty(produto, 'nome', {
    writable: false,           //se for falso nao deixa alterar o valor
    //enumerable: false,    // nao mostra se for verdadeiro...
    //configurable: false,
    value: 'Copa Stanley',    //aqui consigo mudar mas nao depois disso
});

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // qual objeto e qual propriedadae quer ver...
produto.nome = 'Mesa de Centro';  //nao aletra se o writeble ta falso
console.log(produto);

//Object. keys() retorna as chaves
//console.log(Object.keys(produto));
//Object.values retonra os valores das chaves
//console.log(Object.values(produto));


// Object.entreies pega tanto as chaves qto os valores em arrays
//console.log(Object.entries(produto));

//podemios iterar sobre os avlors e chaves do objeto
//for (let entry of Object.entries(produto)) {
//    console.log(entry);
//}
//pode tambem azer o destructoring com o objeto como abaixo
//for (let [chave, valor] of Object.entries(produto)) {
//    console.log(chave, valor);
//};

//putra forma de fazer desructoring talvez mais intuitiva
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
};
    



