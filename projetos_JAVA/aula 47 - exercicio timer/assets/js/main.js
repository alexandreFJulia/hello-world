//alert(1);
// aula 47 exercicio sobre timer

function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'  //pode ser tb GMT
    });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const elemento = e.target;
    if (elemento.classList.contains('zerar')) {
        //alert('cliquei no zerar');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    };
    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    };
    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    };
});

//usar a funcao target ao inves de usar uma pra cada botao...

iniciar.addEventListener('click', function (event) {
    //   //    alert('cliquei no iniciar');
    //   //    relogio.innerHTML = 'cliquei no iniciar';
    //   relogio.classList.remove('pausado');
    //   clearInterval(timer);
    //   iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    ///    //alert('cliquei no pausar');
    //   clearInterval(timer);
    //   relogio.classList.add('pausado');
});

zerar.addEventListener('click', function (event) {
    //    //alert('cliquei no zerar');
    //    relogio.classList.remove('pausado');
    //    clearInterval(timer);
    //    relogio.innerHTML = '00:00:00';
    //    segundos = 0;
});

