/*
Primitivos (imutáveis):
string, number, boolean, undefined, null, (bigint, symbol) - valor

referencia (mutavel) - arrrays, object, funciton - passados por referencia

*/

const a = {
    nome: 'Luiz',
    sobrenome : 'Otavio',
};  // objetos sao chaves e array colchete

//const b = a;  // passa pore referencia e sempre muda em um e no outro
const b = {...a}; //assim copia e nao apontam pro mesmo lugar...
a.nome = 'Joao';
console.log(a);
console.log(b);


/*
let a = [1, 2, 3]
//let b= a    //dados de referencia apontam pro mesmo lugar da memoria entao sempre que um altera o outro tb
let b = [...a]// para copiar o valor sem ser referencia
let c = b  //c vai se sempre igual a a
console.log(a,b);
a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
console.log(c);
*/
