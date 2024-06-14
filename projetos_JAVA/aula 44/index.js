//aula  de tratamento e lançamento erros (try, ctach, throw)

try {
console.log(naoExisto);
} catch(erro) {
    console.log('naoExisto nao existe');
//    console.log(erro);   //trate o erro ,mas nao o exiba para  o usuario
};

function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        throw new TypeError('X e Y precisam ser números validos');  //funcao construtora Error, ReferenceError, etc
    }

    return x +y;
}

try { 
console.log(soma(1,2));
console.log(soma('1',2));
} catch (erro) {
    console.log(erro); //nao exibir o erro para o usuario
    console.log('Algo de errado aconteceu!!')
}

