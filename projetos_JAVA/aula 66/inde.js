//aula sobre MAP
//map altera o valor do array 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//dobre os numeros

const dobro = numeros.map(valor => valor*2);

console.log(dobro);

//retorne apenas uma string com o nome da pessoa

const nome = pessoas.map(objeto => objeto.nome);
console.log(nome);

//remova apneas a chave nome do objeto

const idades = pessoas.map(objeto => ({idade: objeto.idade}));
console.log(idades);

// adicione uma chave ID em cada objeto

const comIds = pessoas.map(function(objeto, indice) {
    const newObj = {...objeto}
    newObj.id = (indice+1)*1000;           // para nao aterar o original.... se quise aleterar o original usa o objeto mesmo
    return newObj;
});

console.log(pessoas);  //veja que o original se modificou

console.log(comIds);