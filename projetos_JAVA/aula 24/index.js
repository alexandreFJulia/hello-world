/*
aula sobre If else
pode usar so o if
ou o if com o if else
ou if e o else
 um if para quantos else if eu qiuser infinitos e apenas um else
*/

const hora = Math.round(Math.random() * 24);

if (hora >=0 && hora <= 12) {
    console.log(`Agora são ${hora}, bom dia!!`);
} else if (hora > 12 && hora <=18){
    console.log(`Agora são ${hora}, Boa tarde!!`);
} else if(hora > 18 && hora <=24) {
    console.log(`Agora são ${hora}, Boa noite!!`);
} else {
    console.log('Bebeu!!!');
};

const tenhograna = Number((Math.random() * 500).toFixed(2));

if (tenhograna > 50){
    console.log(`Tenho ${tenhograna}R$, entao vou sair da casa`)
} else{
    console.log('Nao vou sair de Casa')
};



