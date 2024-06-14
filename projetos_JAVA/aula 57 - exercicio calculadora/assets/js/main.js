//alert(1);
//criar factory function nao faz mto sentido pq so existira um objeto calculadora mas eh para treinar factory function

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),  //atributos em cima e metodos em baxio
       
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });

        },
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,-1);
        },
        
        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

            this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }  
     //       return (eval(this.display.value));       //eval eh mto perigosa pq executa qq coisa que tiver no display tipo se escreve lert('oi') no display vai dar certo;          
        },

        cliqueBotoes(){
            // ate aqui i o .this era a calculador
            document.addEventListener('click', (e) =>{  //para usar arrow function ao inves de usar  (function(e)
            // a partir daqui o .this virou o document ai pra resolver usou o .bind na função
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);     //sempre que um metodo esta dentro de outro precisa da palavra .this
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                //para corrigir qdo pressiona enter tirar o foco do ultimo botao clicado
                this.display.focus();
            });   //ase nao fosse arrow function deveria usar o .bind(this) para manter o .this na calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();



