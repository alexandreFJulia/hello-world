//aula sobre objetos

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`Minha idade atual é: ${this.idade}`)
    },
    incrementaIdade() {
        ++this.idade

    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
const pessoa2 = criapessoa('Luiz', 'Miranda', 25)
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);


function criapessoa(nome, sobrenome, idade) {
    //return {
    //nome,   // pode colocar tb nome : nome, igual embaixo
    //sobrenome : sobrenome,
    //idade : idade,
    // melhor ainda fazer 
    return { nome, sobrenome, idade };
};
const pessoa1 = {   //cria-se um objeto com varios parametros....melhor que sair nomeando as variaveis
    nome:'Luiz',
    sobrnome:'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrnome);
console.log(pessoa1.idade);

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = '25'

const nome02 = 'Maria';
const sobrenome02 = 'Luiza';
const idade02 = '35'




const array = [1,2,3]; //pode alterar valores mas nao pode reatribuir
array.push(4);
array[0]= 'luiz';
console.log(array);
*/
