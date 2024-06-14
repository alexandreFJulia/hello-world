
//jeito um de fazer o exercio e embaixo cai colocar o jeito mais facil
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const dias = ['Domingo', 'Seunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-Feira',
    'Sexta-Feira', 'Sábado', 'Domingo'];
    return dias[diaSemana];
};

 /* 
codigo maior usando o switch
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;   //sem o break continua executando o codigo
         case 1:                     // nesse caso sai por causa do break
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
         case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
         case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
         case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
         case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
         case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;                                                            
    };

}
*/
function getNomeMes(numeroMes){
    
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho', 'Julho', 'Agosto', 
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
}
 /* jeiito com switch
    let NomeMesTexto;
     switch (numeroMes) {
        case 0:
            nomeMesTexto = 'Janeiro';
            return nomeMesTexto;   //sem o break continua executando o codigo
         case 1:                   // nesse caso sai por causa do break
         nomeMesTexto = 'fevereiro';
            return nomeMesTexto;
         case 2:
            nomeMesTexto = 'Março';
            return nomeMesTexto;
         case 3:
            nomeMesTexto = 'Abril';
            return nomeMesTexto;
         case 4:
            nomeMesTexto = 'Maio';
            return nomeMesTexto;
         case 5:
            nomeMesTexto = 'Junho';
            return nomeMesTexto;
         case 6:
            nomeMesTexto = 'Julho';
            return nomeMesTexto;
        case 7:
            nomeMesTexto = 'Agosto';
            return nomeMesTexto;
        case 8:
            nomeMesTexto = 'Setembro';
            return nomeMesTexto;
        case 9:
            nomeMesTexto = 'Outubro';
            return nomeMesTexto;
        case 10:
            nomeMesTexto = 'Novembro';
            return nomeMesTexto;
        case 11:
            nomeMesTexto = 'Dezembro';
            return nomeMesTexto;
        default:
            nomeMesTexto = '';
            return nomeMesTexto;                                                            
    };

};
*/
function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    return (
        `${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ` +
        `${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
        );
};

function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}` 
}

h1.innerHTML = criaData(data);
 /*

 melhor opcao pois usa a linguagem nativa

const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

// deu erro usando .tolocaleDateString e deu certo usando toLocaleString
//h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

// ao invesde usar o opcoes pode escrever direto como embaixo:
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/



