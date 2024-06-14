/*
 aritmeticos: + - * /

    + adição ou concatenação

    ** ponteciaçao (elevado) 2 ** 10 eh igual a 2^10

    % retorna o resto da divisao

   - e / subtrai e divide

   primeiro sao feitas as contas de multiplicação e divisao e depois os outros 
   
   a sequencia eh
 
   () 
   **
   * / e % multiplicação divisao e resto
   + e - 

   incremento = ++ tem o pre e o pos colocando antes ou depois da variavel
   decremento = --
   qto ta antes ele incrementa antes e mostra depois e depois ele mostra e incrementa depois

   += incrementa tipo +=2 incrementa 2 
   *= multiplica tipo *=3 multiplica po 3


   tipo de erro  - Nan  = not a number

   parseInt - converte para inteiro - parseInt('5');
   parseFloat - converte para numero real de ponto flutuante - parseFloat('5.2')
    outra maneira eh colcoar direto number = '5'
 */


let contador =2;
const passo = parseFloat('5.2'); // converte para inteiro

//contador++ // incrementa variavel para 2
//++contador // incrementa variavel para 3 pode ser antes ou depois o ++
//++contador // incrementa variavel para 4

//contador = contador+passo
//contador += passo //isso eh igual a contador = contador+passo

contador =  passo// igual o de cima sem precisar do passo

console.log(contador)

