//retorno de uma função
//return - retorna uma vlaor e termina a função

function soma(a,b){
    return a+b;
}

function soma2(a,b){
    console.log(a+b);
}
//soma2(392,5);
//exemplo funcao que nao retrona nada mas tem uma utilidade mudar cor do fundo ao clicar
//document.addEventListener('click', function () {
//    document.body.style.backgroundColor = 'red';
//});

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
};

//tanto p1 como p2 sao objetos criados de forma diferente
const p1 = criaPessoa('Alexandre', 'Julia');

const p2 = {
    nome: 'Maria',
    sobrenome: 'Luiza',
};
//console.log(p1);
//console.log(p2);


//exemplo de funcao fdentro de funcao dentro de funcao
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' '+ resto;
    }
    return falaResto;
};

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function duplica(n){
    return n*2;
};
function triplica(n){
    return n*3;
};function quadriplica(n){
    return n*4;
};

//mesma coisa ambas as funcoes pra mostra usabilidade de funcao dentro de funcao

function criaMultiplicador2(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
};

function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
};

const duplica2 = criaMultiplicador2(2);
const triplica2 = criaMultiplicador2(3);
const quadriplica2 = criaMultiplicador2(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));

