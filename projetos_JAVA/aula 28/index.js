// objeto DATE - funcao construtora
// ver MDN com tudo que pode fazer
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// 01/01/1970 00:00:00 marco zero da data.

//const tresHoras = 60 * 60 * 3 * 1000 // tres horas ja um minuto tem 60 segs e uma hora tem
                                    // 60 min  queremos 3 horas e o java mostra em milisegundos 
                                    //por isso x1000

//const umDia = 60*60 * 24*1000; // un dia em milessimos de segundo
//const data = new Date(0+tresHoras+umDia);  //01/01/1970 00:00:00 marco zero da data + 3 horas + um ida
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mes comecando em 0(janeiro), dia, hora, minuto, segundo e milisegundos

//const data = new Date('2019-04-20 20:20:58.200'); //podeser com ou sem os milisegundos
//const data = new Date('2019-04-20 20:15:58.200'); //podeser com ou sem os milisegundos
/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()) +1; // começa do zero, entao soma 1 pra dar o mes "correto" 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Mili Segundos', data.getMilliseconds());
console.log('Dia Semana', data.getDay());   // 0 eh domingo e 6 eh sabado...
console.log(data.toString());

console.log(Date.now());  // exibe data atual em milesimos de segundos
*/
function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}` 
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    diaSemana = qualDia(data.getDay());
    
    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg} e hoje é ${diaSemana}.`
}

function qualDia(data) {
    if (data == 0) { return 'Domingo' }
    if (data == 1) { return 'Segunda-feira' }
    if (data == 2) { return 'Terça-feira' }
    if (data == 3) { return 'Quarta-feira' }
    if (data == 4) { return 'Quinta-feira' }
    if (data == 5) { return 'Sexta-feira' }
    if (data == 6) { return 'Sabado' }
};


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
