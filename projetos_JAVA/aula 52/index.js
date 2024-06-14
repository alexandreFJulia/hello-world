//aula sobre escopo lexico

const nome ='Alexandre';

function falaNome(){
 //   const nome ='Julia'    //desta forma usa a vaiavel do proprio escopo
    console.log(nome);
};

function usaFalaNome(){
    const nome = 'Font'  //desta forma nao pega o nome pq so reconhece aqui dentro da funcao
falaNome();
};

usaFalaNome();

//isso eh o escopo lexico qdo uma variavel esta em um escopo maior

