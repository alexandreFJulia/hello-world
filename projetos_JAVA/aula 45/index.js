// aula tratando erros com try catch finally
/*
try{
 // parte executada qda nao ha erros
// console.log(a); para dar o erro e executar o catch...
    console.log(`abrir um arquivo`);
    console.log(`Manipulei o arquivo e gerou erro`);
    console.log("Fechei o arquivo");
    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro')
    } finally {
        console.log('Tambem sou FINALLY');
    }
} catch (erro) {
// executado qdo ha erros
    console.log(`tratando o erro`);
} finally {
// sempre executado o finallly pode nao existeir como aula anterior   
    console.log(`FINALLY: Eu sempre sou executado`);
};
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    //tratar erro
    console.log(e);
} finally {
    console.log('Tenha um nom dia!!')
}







