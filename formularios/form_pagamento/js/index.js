'use strict';
import { salveDataCard } from './end_point_cadastrar_dodos_cartao.js'
import { automationData } from './end_point_cadastro_dados_pessoais_cartao.js';
import { salveDataDonation } from './end_point_cadastro_doacao.js'
const numeroCartao = document.querySelector('#numeroCartao');
const nomeTitularCartao = document.querySelector('#nomeTitularCartao');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const cvv = document.querySelector('#cvv');
const urlParams = new URLSearchParams(window.location.search);
const id_data_personal = urlParams.get('id')
const id_register_user = urlParams.get('id_register_user')

'use strict';

const loadAutomationPage = async function () {
  const idUser = Number(id_data_personal);///
  const dataUser = await automationData(idUser);
  console.log(dataUser)
  if (dataUser.message.data_payment.nome != '') {
    numeroCartao.value = dataUser.message.data_payment.numero_cartao
    nomeTitularCartao.value = dataUser.message.data_payment.nome
    mes.value = dataUser.message.data_payment.mes
    ano.value = dataUser.message.data_payment.ano
    cvv.value = dataUser.message.data_payment.cvv

  } else {
    const setDataCardUser = async function (data) {
      const result = await salveDataCard(data)
      if (result.status == 201) {

      }
    }
    const submit = document.querySelector('#submitButton');
    let numeroCartaoAtual;
    let doacao;
    let nomeTitular;
    let mesCartao;
    let anoCartao;
    let cvvCartao;

    numeroCartao.addEventListener('input', function (event) {
      numeroCartaoAtual = numeroCartao.value;
    });

    const valorDoacao = document.querySelector('#valorDoacao');
    valorDoacao.addEventListener('input', function (event) {
      doacao = valorDoacao.value;
    });

    nomeTitularCartao.addEventListener('input', function (event) {
      nomeTitular = nomeTitularCartao.value;
    });

    mes.addEventListener('change', function (event) {
      mesCartao = mes.value;
      console.log(mesCartao);
    });

    ano.addEventListener('change', function (event) {
      anoCartao = ano.value;
      console.log(anoCartao);
    });

    cvv.addEventListener('input', function (event) {
      cvvCartao = cvv.value;
      console.log(cvvCartao);
    });

    submit.addEventListener('click', function () {

      let dadosJson = {
        number_card: numeroCartaoAtual,
        name_user: nomeTitular,
        month: Number(mesCartao),
        year: Number(anoCartao),
        cvv: cvvCartao,
        id_data_personal: Number(id_data_personal)
      }
      setDataCardUser(dadosJson)
    })
  }
}

const setDataDonation = async function (dadosJson) {

  const statusDonation = await salveDataDonation(dadosJson)
  if (statusDonation.status == 201) {
    const mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = `Parabéns ${nomeTitularCartao.value} ! Doação realizada com sucesso.`;
    mensagemSucesso.classList.add('sucesso');
    document.body.appendChild(mensagemSucesso);
    setTimeout(() => {
      mensagemSucesso.remove();
    }, 3000); // Remover a mensagem após 3 segundos (3000 milissegundos)
  } else {
    const mensagemErro = document.createElement('p');
    mensagemErro.textContent = `Atenção ${nomeTitularCartao.value} verifique as informações e tente novamente.`;
    mensagemErro.classList.add('erro');
    document.body.appendChild(mensagemErro);
    setTimeout(() =>{
      mensagemErro.remove()
    }, 3000)
  }
}

const button = document.querySelector('#submitButton');
button.addEventListener('click', function () {
  let nameUser = nomeTitularCartao.value
  let emailUser = localStorage.getItem('email')
  let valor = document.querySelector('#valorDoacao');
  let valorString = valor.value; // Obtém o valor completo da caixa de entrada

  // Remove o símbolo de moeda "R$" e o separador de milhares ","
  let valorSemMoeda = valorString.replace('R$', '').replace(/\./g, '');
  // Substitui a vírgula por um ponto decimal
  let valorNumerico = parseFloat(valorSemMoeda.replace(',', '.'));

  if (!isNaN(valorNumerico)) {
    let dadosDonationJson = {
      name: nameUser,
      email: emailUser,
      donation: valorNumerico,
      id_register_user: Number(id_register_user)
    }
    setDataDonation(dadosDonationJson)
  }
})
loadAutomationPage(id_data_personal)

