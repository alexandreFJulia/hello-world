//aula break e continue


const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    
    if (numero ===2  || numero ===5) {
        console.log('pulou o numero')
        continue;               //pula paroxima iteraçõ do laço
    };
    if (numero ===7) {
        console.log('achei o numero')
        break;                  //sai do laço quano chega no break
    };
    console.log(numero);
}
