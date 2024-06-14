
//para usar aspas duplas dentro de aspas duplas da pra usar uma barra invertida pra escapar o caracter
// uma barra invertida \ escapa o proximo caracter ex: umastring = "Alexand\"re";


//indices de string sao de 0 a infinito da esquerda pra direita
//tipo string = alexandre a = 0 l = 1 e = 2 x = 3
//negocio de usar crase e ${} eh muito maneiro
//               0123456789
let umastring = "O rato roeu a roupa do rei de roma.";


console.log(umastring.indexOf('o',3));
console.log(umastring.search(/x/));
console.log(umastring.replace(/r/g, '#'));
console.log(umastring.length);
console.log(umastring.slice(2,6));
console.log(umastring.slice(-5, -1));  //qdo usa negativo vai do final

console.log(umastring.split(' ', 3));
console.log(umastring.toUpperCase());
console.log(umastring.toLowerCase());
//expressoes regular tem mta coisa...
// olhar na internet w3schools javascript   ou   mdn javascript


console.log(`${umastring} em um lindo dia`)