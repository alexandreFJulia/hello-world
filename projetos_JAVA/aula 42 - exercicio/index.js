//exercicio de ver se uma imgaem eh paisagem ou retrato

const larg = 1000
const alt = 100

const ePaisagem = (largura, altura) => largura > altura;

//jeito mais longo o melhor eh usar arrow function como acima
//function ePaisagem (largura, altura) {
//    return largura > altura ? true : false; // neste caso nao precisa de colocar true ou false
//    return largura >= altura
//};

if (ePaisagem(larg, alt) === true) {
    console.log('Paisagem');
} else console.log('Retrato');

