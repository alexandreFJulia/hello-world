//Exerccio de validar o CPF

/*
705.484.450-52  070.987.720-03

primeiros 9 digitos servem pra gerar os dois ultimos digitos...

passo 1 -
multiplicar os digitos em ordem regressiva de 10  a 2 conforme exemplo abaio
7 x 10 + 0 x 9 + 5 x 8 + 4 x 7 + 8 x 6 + 4 x 5 + 4 x 4 + 5 x 3 + 0 x 2 = 237

passo 2 - 
depois usa a formula abaixo

11 - (237 % 11 resto da divisao por 11) = 5 (primeiro digito, se o numero for maior que 9 considera 0)

passo 3 - 
multiplicar os digitos em ordem regressiva de 11  a 2 conforme exemplo abaio (incluindo o primeiro digito achado)
7 x 11 + 0 x 10 + 5 x 9 + 4 x 8 + 8 x 7 + 4 x 6 + 4 x 5 + 5 x 4 + 0 x 3 + 5 x 2 = 284

passo  4-
aplicar a formula abaixo
11 - (284 % 11 resto da divisao e 11) = 2 (valor encontrado e se for maior que 9 deixar 0)

passo 5 sempre a soma dos 11 digitos tem que ser dois nuemros iguais

*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial+ digito1);
    
    const novoCPF = cpfParcial + digito1 + digito2
    return this.cpfLimpo === novoCPF;

};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length +1;
    const total = cpfArray.reduce((ac, val) => {
       ac += (regressivo * Number(val));
        regressivo--
        return ac;
    }, 0 );

    const digito = 11 - (total % 11);
    return digito > 9 ? '0'  : String(digito);
};
ValidaCPF.prototype.isSequencia = function () {
   const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return (sequencia === this.cpfLimpo);
};
    //console.log(cpfArray);

const cpf = new ValidaCPF('705.484.450-52');

if (cpf.valida()) {
    console.log('CPF Válido!!');
} else {
    console.log('CPF Inválido!!');
};

