/*
&& - AND - retorna o ultimo verdadeiro se todos sao verdadeiros senao retorna falso
|| - OR - retorna a primeiro valor verdadeiro
FALSY values
false
0
NaN
'' ou "" ou ``
null / undefined 
*/

const corUsuario = 'Blue';
const corPadrao = corUsuario || 'red';

console.log(corPadrao);

/*
function oi() {
    return 'Oi';
};
let expressao = true;

console.log( expressao && oi()); // retorna maria pois retorna o ultima caso todos sejam true
*/
