//aula sobre contatenar arrays


const a1 = [1,2,3];
const a2 =[4,5,6];

const a3 = a1.concat((a2), [7,8,9], 'Alexandre');  //pode ou nao ter os eleentos 2 e 3 etc

//... rest pega o restro dos parametros
// ... rest -> ... spread

const a4 = [...a1,...[7,8,9], 'Alexandre',...a2];




console.log(a3,a4);