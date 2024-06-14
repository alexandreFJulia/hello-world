


const numero = Number(prompt('Digite um número'));
// numero = number(numero) //seria outra maneira porem teria que trocar de const para let
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero
texto.innerHTML = '';   //apaga a palavra texto declrdo no HTML
texto.innerHTML += `<p>Seu número é ${numero};</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5};</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)};</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)};</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)};</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)};</p>`;
texto.innerHTML += `<p>com duas casas decimais ${numero.toFixed(2)};</p>`;