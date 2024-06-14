//aula sobre Switch - case
//quando utilizar switch ou if

function getDiaSemanaTExto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;   //sem o break continua executando o codigo
         case 1:                     // nesse caso sai por causa do break
            diaSemanaTexto = 'Segunda-Feira';
            break;
         case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
         case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
         case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
         case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
         case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'ERRO!!!';
            break;                                                            
    };
    return diaSemanaTexto;
}


let data = new Date();
let diaSemana = data.getDay();
diaSemana = 5;
const diaSemanaTexto = getDiaSemanaTExto(diaSemana);
/* usando IF else seria assim
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Seta-Feira';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTeto = 'ERRO!!!'
};
*/

//agora com switch



console.log(`Hoje é ${diaSemanaTexto}, que é o dia ${diaSemana} da semana.`);
