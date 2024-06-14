//aula e funcao
/*
function minhaPrimeiraFuncao(nome) {
//console.log(`Bom Dia ${nome}!`)
return `Bom Dia ${nome}!`        //para retornar da funcao
}
const variavel = minhaPrimeiraFuncao('Alexandre');  //recebe o retorno da funçao qdo tm retorno
console.log(variavel);


function soma(x =1 , y= 1) {  //cqdo atribui valor elimna um erro se qdo chamra funcao e vier vazio
    const resultado = x + y
    return resultado
    console.log('Ola mundo!!!');   //nada abaxo do return eh executado
}
const resultado = soma(5 , 2);
console.log(resultado);
*/

const raiz = function (n) {    //outra maneira de criar funcao
    return n **0.5;
};         //so precisa de ; qdo faz a funcao direto na declaracao do const

//funcao igual a anterior...
const raiz2 = (n) => {    //outra maneira de criar funcao chamda de arrow function por causa do =>
    return n **0.5;
};         //so precisa de ; qdo faz a funcao direto na declaracao do const

const raiz3 = n => n ** 0.5;  // exatamente igual as anteriores como tem um parametro da pra eliminar tudo

console.log(raiz(9));
console.log(raiz2(9));
console.log(raiz3(9));