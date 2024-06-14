// aula sobre let e var
//let tem escopo de bloco tudo que ta entre {...bloco}
//var tem escopo de função
/*
const verdadeira = true;

let nome = 'Luiz'            //criando
var nome2 = 'Luiz'           //criando

var nome2 = 'Alexandre'

if (verdadeira) {
    let nome = 'Otavio'     //criando
    var nome2 = 'teste'     //redeclarando
    console.log(nome, nome2);
    
    if (verdadeira) {
        let nome = 'Silva';       //criando
        var nome2 = 'Ronaldo'     //redeclarando  
        console.log(nome, nome2);   //busca variavel no bloco se nao tem vao no bloco anterior e assim por diante
    }
};
console.log(nome, nome2);   
*/

// qdo usa var pode ate declarar depois de usar mas o valor antes de declarar fica undefined
//isso pq ele faz elevação da variavel,

var nome ='teste'
function falaoi() {
    var nome = 'Thereza'
};
falaoi();
console.log(nome);


