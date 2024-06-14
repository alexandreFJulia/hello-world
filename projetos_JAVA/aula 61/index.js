//aula funçoes geradoras

function* geradora1() {
    //codigo qualquer aqui...
    yield 'Valor1';
    //codigo qualquer aqui...
    yield 'Valor2';
    //codigo qualquer aqui...
    yield 'Valor3';
};

function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i ++;
    };
};

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5(){
    yield function() {
        console.log('Vim de y1');
    };

    return function() {               //return detona funcao geradora pq termina nela e nao da pra atingir yields abaixo
        console.log('vim do return');
    }

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


/*

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}


const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);



//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next());  //chave done mostra que acabaram os metodos

*/











