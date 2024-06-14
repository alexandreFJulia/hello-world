function meuEscopo () {    //usar functionpra nao poluir o escopo global, tipo outra biblioteca alterar sua variavel
    const form = document.querySelector('.form');  //para classe usa . e nome para ID usa #nome
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +   //como quebrar linha
        ` ${peso.value} ${altura.value} </p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();

    //maneira um de atuar em um evento no caso de envio formulario
/*    form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
        console.log('foi enviado');
    };
 */
