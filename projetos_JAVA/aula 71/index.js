//aula sobre define property() e define properties

function Produto(nome, preco, estoque) {
    //para deixar o estoqe inacessivel eh so nao declarr
    //   this.estoque = estoque;
    //this.nome = nome,
    //this.preco = preco,

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // deixar ele visivel - mostra chave
        value: estoque,   //adicionar o atributo - valor
        writable: false, //nao pode alterar - editavel
        configurable: false, // pode ser configurado
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // deixar ele visivel - mostra chave
            value: nome,   //adicionar o atributo - valor
            writable: true, //nao pode alterar - editavel
            configurable: true, // pode ser configurado
    
        },
        preco: {
            enumerable: true, // deixar ele visivel - mostra chave
            value: preco,   //adicionar o atributo - valor
            writable: true, //nao pode alterar - editavel
            configurable: true, // pode ser configurado
    
        },
    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000; // se o writetable for false nao altera se for true altera
console.log(p1);

delete p1.estoque;  // nao deixa pq o configurable ta false
console.log(Object.keys(p1));   //se enurable for false nao mostra a chhave em questao

for (let chave in p1) {
    console.log(chave);
};