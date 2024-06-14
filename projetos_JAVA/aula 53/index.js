//aula sobre closures

function retornaFuncao(nome) {
 //   const nome ='Alexandre'
    return function() {
        return nome;    //essa funcao tem acesso a tres escopos, o dela o da mae e o global
    };
};

const funcao = retornaFuncao('Alexandre');
const funcao2 = retornaFuncao('Julia');
console.dir(funcao);
console.dir(funcao2);   //para ver no navegador usar .dir ao inves de .log

console.log(funcao(), funcao2());


