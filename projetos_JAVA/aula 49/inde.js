//aula sobre funçoes avançado

//declaração de função (function hoisting)
//eleva a funçao por isso pode chaamr antes da funçao ser feita
falaoi();
function falaoi() {
    console.log('Oie');
};

//first class objects
//funcoes sao objetos de primeira classe
//function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo');
    funcao();
};

executaFuncao(souUmDado);

//arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto

const objeto ={
 //   falar: function() {
    falar() {     //da pra fazer sem declarara a function...
    console.log('estou falando...');
    }
};
objeto.falar();




