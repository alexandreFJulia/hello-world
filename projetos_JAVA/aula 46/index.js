//aula de setinterval e setTimeout

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

function funcaoDoInterval(){
    console.log(mostraHora());
} 
//jeito umm de usar
//setInterval(funcaoDoInterval, 1000); //executar funcao a cada 1000 milisegundos
//ou faz assim
//setInterval(function () {
//    console.log(mostraHora());
//}, 1000);
// ou jogar numa variavel

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout( function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log("ola mundo!!!");
}, 10000);



