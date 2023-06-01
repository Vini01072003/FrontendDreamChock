'use strict'

function contador() {
    var numeroElemento = document.getElementById("numero"); // Obtém a referência para o elemento HTML com o ID "numero"
    var numeroAtual = parseInt(numeroElemento.textContent.replace(/\./g, "")); // Remove os pontos do número atual

    // Gera um número aleatório entre 6 e 12
    var numeroAleatorio = Math.floor(Math.random() * 7) + 6;

    var novoNumero = numeroAtual + numeroAleatorio; // Calcula o novo número somando o número atual com o número aleatório
    numeroElemento.textContent = formatarNumero(novoNumero); // Atualiza o conteúdo do elemento com o novo número formatado
}

function formatarNumero(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Adiciona os pontos no número para formatá-lo
}

setInterval(contador, 1000); // Chama a função contador a cada segundo (1000 milissegundos)
