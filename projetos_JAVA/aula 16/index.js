
//aula de array
//                0         1      2        3
const alunos = ['Maria', 'Luiz', 'Clara'];
//            0  1  2  3   
console.log(alunos);
console.log(typeof alunos);     //retorna que eh um objeto
console.log(alunos instanceof Array);     //verificar se eh um array ou nao

alunos[1] = 'Eduardo' ; //alterar array em um indice especifico
alunos[alunos.length] = 'Cecilia';          //adiciona no fim
alunos.push('Lolo');                        //adiciona no fim
alunos.unshift('Bruno');                    //adiciona no inicio
console.log(alunos);
                         
const removido = alunos.pop();           //remove o ultimo
const removido2 = alunos.shift();          //remove do inicio
delete alunos[1];                       //remove mas nao altera os indices deixa vazio aquele espaço do array
alunos[1] = "Alexandre"
console.log(removido);
console.log(removido2);
console.log(alunos);                   //nao da erro mostra so undefined
console.log(alunos.slice(0,3));        //mostrar parte do Array incio inclui e fim nao
console.log(alunos.slice(0,-2));        //negativo vai excluindo do fim a cada -1 elima um do fim