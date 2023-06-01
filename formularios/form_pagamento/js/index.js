'use strict';
import { salveDataCard } from './end_point_cadastrar_dodos_cartao.js'
import { automationData } from './end_point_cadastro_dados_pessoais_cartao.js';
const numeroCartao = document.querySelector('#numeroCartao');
const nomeTitularCartao = document.querySelector('#nomeTitularCartao');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const cvv = document.querySelector('#cvv');
const urlParams = new URLSearchParams(window.location.search);
const idRegisterUser = urlParams.get('id')

'use strict';

const loadAutomationPage = async function(){
  const idUser = Number(idRegisterUser);
  const dataUser = await automationData(idUser);
  if(dataUser.message.data_payment.nome != ''){
    console.log(dataUser)
    numeroCartao.value = dataUser.message.data_payment.numero_cartao
    nomeTitularCartao.value = dataUser.message.data_payment.nome
    mes.value = dataUser.message.data_payment.mes
    ano.value = dataUser.message.data_payment.ano
    cvv.value = dataUser.message.data_payment.cvv

  }else{
    const setDataCardUser = async function(data){
      const result = await salveDataCard(data)
      console.log(result)
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
      event.preventDefault()
      
        let dadosJson = {
            number_card: numeroCartaoAtual,
            name_user: nomeTitular,
            month: Number(mesCartao),
            year: Number(anoCartao),
            cvv: cvvCartao,
            id_data_personal: Number(idRegisterUser)
        }
    
        setDataCardUser(dadosJson)
    
    })
  }
}

loadAutomationPage(idRegisterUser)

