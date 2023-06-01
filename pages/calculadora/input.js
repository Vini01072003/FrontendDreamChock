'use strict'

function formatarValorReais() {
    var campoValor = document.getElementById("valor-eletrica"); // Obtém o elemento do input de valor da conta
    var valor = campoValor.value.replace(/\D/g, ''); // Remove caracteres não numéricos do valor digitado
    var valorFormatado = (Number(valor) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Converte o valor para formato de moeda brasileira
    campoValor.value = valorFormatado; // Atualiza o valor do input com o valor formatado em reais
}

function calcularEmissoesEletricidade() {

    var campoValor = document.getElementById("valor-eletrica"); // Obtém o elemento do input de valor da conta
    var valor = parseFloat(campoValor.value.replace(/[^\d,]/g, '').replace(',', '.')); // Remove caracteres não numéricos, exceto vírgula e ponto, e converte o valor para um número de ponto flutuante

    var emissoesMensais = valor * 0.1; // Calcula as emissões mensais multiplicando o valor por 0.01 (considerando uma fórmula hipotética de conversão)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses

    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais-eletricidade").textContent = emissoesMensais.toFixed(4); // Atualiza o valor das emissões mensais com 4 casas decimais
    document.getElementById("emissoes_anuais-eletricidade").textContent = emissoesAnuais.toFixed(4); // Atualiza o valor das emissões anuais com 4 casas decimais
}

function calcularEmissaoTransporte() {
    var campoQuilometragem = document.getElementById("valor-transporte"); // Obtém o elemento do input de quilometragem
    var quilometragem = parseFloat(campoQuilometragem.value.replace(/[^\d.]/g, '')); // Remove caracteres não numéricos, exceto ponto, e converte o valor para um número de ponto flutuante


    var emissoesMensais = quilometragem * 0.2; // Calcula as emissões mensais multiplicando a quilometragem por 0.2 (exemplo hipotético)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses


    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais_transporte").textContent = emissoesMensais.toFixed(2); // Atualiza o valor das emissões mensais formatado
    document.getElementById("emissoes_anuais_transporte").textContent = emissoesAnuais.toFixed(2);; // Atualiza o valor das emissões anuais formatado
}

function formatarInputTransporte() {
    var campoValor = document.getElementById("valor-transporte"); // Obtém o elemento do input
    var valor = campoValor.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do valor digitado

    // Divide o valor em parte inteira e parte decimal
    var parteInteira = valor;
    var parteDecimal = '';

    // Verifica se há casas decimais
    if (valor.indexOf('.') !== -1) {
        var partes = valor.split('.');
        parteInteira = partes[0];
        parteDecimal = partes[1];
    }

    // Formata a parte inteira com ponto a cada três dígitos
    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Atualiza o valor do input com o valor formatado
    campoValor.value = parteInteira + (parteDecimal ? '.' + parteDecimal : '');
}

function calcularEmissaoGases() {
    var campoBotijoes = document.getElementById("valor-gas"); // Obtém o elemento do input de quantidade de botijões
    var quantidadeBotijoes = parseFloat(campoBotijoes.value.replace(/[^\d.]/g, '')); // Remove caracteres não numéricos, exceto ponto, e converte o valor para um número de ponto flutuante

    var emissoesMensais = quantidadeBotijoes * 15; // Calcula as emissões mensais multiplicando a quantidade de botijões por 15 (exemplo hipotético)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses

    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais_gases").textContent = emissoesMensais.toFixed(2); // Atualiza o valor das emissões mensais formatado
    document.getElementById("emissoes_anuais_gases").textContent = emissoesAnuais.toFixed(2); // Atualiza o valor das emissões anuais formatado
}

function formatarInputGas() {
    var campoValor = document.getElementById("valor-gas"); // Obtém o elemento do input
    var valor = campoValor.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do valor digitado

    // Atualiza o valor do input com o valor formatado
    campoValor.value = valor;
}
