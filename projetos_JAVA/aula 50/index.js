//aula sobre parametros da função

function funcao(texto) {  //mesmo uue nem todos ou nenhum argumento cehgye executa igual
    console.log(arguments[0]);
    console.log(arguments[4]);
};

funcao('texto', 1, 2, 3, 4, 5);   // enviando argumento 'texto'

function funcao2(a,b,c) {
    let total = 0
    for (let argumento of arguments) {  //arguments pega;sustenta todos os argumentos
        total += argumento
    }
    console.log(total, a, b, c);
}

funcao2(1,2,3,4,5,6,7);

function funcao3(a,b = 2, c = 4) {  //outra forma de passar um valro como b
//    b = b || 0;  //caso nao passe o parametro
    console.log(a+b+c);
};
funcao3(2,'',20);  //qdo tem menos argumento que o esperado ele cria como undefined

funcao3(2,undefined,20); //unica maneiira de pular um valor
   //qdo tem menos argumento que o esperado ele cria como undefined
   

function funcao4( {nome, sobrenome, idade}) {  //outra forma de passar um valro como b
    //    b = b || 0;  //caso nao passe o parametro
        console.log(nome, sobrenome, idade);
    }; // via desestruturação pegamos um objeto e o quebramos 

funcao4({nome: 'Alexandre', sobrenome:'Julia', idade:45});

let obj = {nome: 'Maria', sobrenome:'Luiza', idade:54};

funcao4(obj); //funciona tb com arrays []

//outra forma de fazer eh declarar a funcao dentro de uma variavel
 
const conta = function conta(operador, acumulador, ...numeros){  //tem que ser sempre o ultimo parametro...
    console.log(operador, acumulador, numeros);  //usar ... para o argumento receber o resto dos parametros tipo array sem colchete
for (let numero of numeros) {    //se usar for in retorna os indices
    console.log(numero);
    if (operador ==='+') acumulador +=numero;
    if (operador ==='-') acumulador -=numero;
    if (operador ==='/') acumulador /=numero;
    if (operador ==='*') acumulador *=numero;
}
console.log(acumulador);
};
//parametro arguments nao existe em arrow function =>
//conta('+', 0[20,30,40,50]); //funcionaria aassim pra um dos paramet4os ser o array
conta('+', 0, 20,30,40,50);

//funciona igual e eh bem mais curta so nao tem funcao arguments
const conta2 = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
}
conta2('+', 0, 20,30,40,50);

//para ter os argumentos no arrow function

const conta3 =(...args) =>{
    console.log(args);
}

conta3('+', 0, 20,30,40,50);
