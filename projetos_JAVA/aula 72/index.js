//define property -> getter e setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // deixar ele visivel - mostra chave
        // value: estoque,   //adicionar o atributo - valor // nao ua pq vai suar getter e setter
        // writable: true, //nao pode alterar - editavel // nao ua pq vai suar getter e setter
        configurable: true, // pode ser configurado
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
             //   console.log('Bad Value');
             //   return;
             throw new TypeError('Mensagem de Erro');
            }
            estoquePrivado = valor;
        }
    });
};

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Calça');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);

/*const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
//console.log(p1);
console.log(p1.estoque);
*/

