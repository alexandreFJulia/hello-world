// operador ternario

// ? : (usar como embaixo);
// condiçao depois ? (vaor para verdadeiro) : (valor para falso);

const ptsUsuario = 1999;

if (ptsUsuario >= 1000) {console.log('Usuario Vip!');
} else {console.log('Usuario normal!');};

// comperaçao ternaria ficaria assim

const nivelUsuario = ptsUsuario >= 1000 ? 'Usuario Vip!' : 'Usuario normal!'
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);

