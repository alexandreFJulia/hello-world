//aual sobre funcoes imediatas ou auto envocadas
//IIFE - immediately invoked functoin expression

(function(idade, peso, altura) {
    const sobrenome ='Julia';
    function criaNome(nome) {
        return nome + ' ' +sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Alexandre'));
    }
    
    falaNome();
    console.log(idade, peso, altura)
})(45, 90, 1.69);


//invocar a funcao sem precisar chama-la asssim ela nao toca o esocpo global
