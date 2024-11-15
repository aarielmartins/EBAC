document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){ //SELECIONA O FORMULARIO E ADICIONA O EVENTO A SUBMISSÃO
        evento.preventDefault(); //EVITA RECARREGAR A PÁGINA
        let numeroMaximo = document.getElementById('numero-maximo').value; //SELECIONA O O VALOR DIGITADO (COM O VALUE)
        numeroMaximo = parseInt(numeroMaximo); // TRANSFORMA A STRING EM VALOR NUMÉRICO
        let numeroAletorio = Math.random() * numeroMaximo; //CRIA UM NÚMERO ALEATÓRIO
        numeroAletorio = Math.floor(numeroAletorio + 1); //ARREDONDA PRO MENOR NÚMERO MAIS PRÓXIMO E ADICIONA 1 (PARA QUE O VALOR NUNCA SEJA 0)

        document.getElementById('resultado-valor').innerText = numeroAletorio; //INSERE O NÚMERO SORTEADO NO SPAN
        document.querySelector('.resultado').style.display = 'block'; //MOSTRA A DIV COM O VALOR DO RESULTADO
    })
})
