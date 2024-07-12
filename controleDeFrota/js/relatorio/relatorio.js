/////////////////////////////// DATA HORA SAÍDA ///////////////////////////////

function validarDataHoraSaida(dataHoraString) {
    const $data_hora_saida = document.querySelector('#data_hora_saida');

    if (dataHoraString.trim() === '') {
        $data_hora_saida.setCustomValidity('');
        return true;
    }

    const partesDataHora = dataHoraString.split(' ');
    if (partesDataHora.length !== 2) {
        mensagemAlertaDataHoraSaida();
        return false;
    }

    const dataString = partesDataHora[0];
    const horaMinutoString = partesDataHora[1];

    // Validação da data
    const partesData = dataString.split('/');
    if (partesData.length !== 3) {
        mensagemAlertaDataHoraSaida();
        return false;
    }

    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);

    // Validação da hora e minuto
    const partesHoraMinuto = horaMinutoString.split(':');
    if (partesHoraMinuto.length !== 2) {
        mensagemAlertaDataHoraSaida();
        return false;
    }

    const hora = parseInt(partesHoraMinuto[0], 10);
    const minuto = parseInt(partesHoraMinuto[1], 10);

    const data = new Date(ano, mes, dia, hora, minuto);
    const dataAtual = new Date();
    const seculoAtual = Math.floor(dataAtual.getFullYear() / 100);

    if (
        data.getDate() !== dia || 
        data.getMonth() !== mes || 
        data.getFullYear() !== ano ||
        isNaN(hora) || hora < 0 || hora > 23 ||
        isNaN(minuto) || minuto < 0 || minuto > 59
    ) {
        mensagemAlertaDataHoraSaida();
        return false;
    }

    if (data.getFullYear() < seculoAtual * 100) {
        mensagemAlertaDataSaidaSeculoPassado();
        return false;
    }

    if (data > dataAtual) {
        mensagemAlertaDataHoraSaidaFutura();
        return false;
    }

    $data_hora_saida.setCustomValidity('');
    return true;
}

document.getElementById('data_hora_saida').addEventListener('blur', function() {
    const dataHoraDigitada = this.value;
    validarDataHoraSaida(dataHoraDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataHoraDigitada = document.getElementById('data_hora_saida').value;
    if (!validarDataHoraSaida(dataHoraDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataHoraSaida() {
    'use strict';
  
    var $data_hora_saida = document.querySelector('#data_hora_saida');

    var errorsMessage = 'Data ou hora inválida.';
    $data_hora_saida.setCustomValidity(errorsMessage);
    $data_hora_saida.reportValidity();
}

function mensagemAlertaDataHoraSaidaFutura() {
    'use strict';

    var $data_hora_saida = document.querySelector('#data_hora_saida');

    var errorsMessage = 'Data ou hora futura.';
    $data_hora_saida.setCustomValidity(errorsMessage);
    $data_hora_saida.reportValidity();
}

function mensagemAlertaDataSaidaSeculoPassado() {
    'use strict';

    var $data_hora_saida = document.querySelector('#data_hora_saida');

    var errorsMessage = 'Data do século passado.';
    $data_hora_saida.setCustomValidity(errorsMessage);
    $data_hora_saida.reportValidity();
}


/////////////////////////////// DATA HORA CHEGADA ///////////////////////////////

function validarDataHoraChegada(dataHoraString) {
    const $data_hora_chegada = document.querySelector('#data_hora_chegada');

    if (dataHoraString.trim() === '') {
        $data_hora_chegada.setCustomValidity('');
        return true;
    }

    const partesDataHora = dataHoraString.split(' ');
    if (partesDataHora.length !== 2) {
        mensagemAlertaDataHoraChegada();
        return false;
    }

    const dataString = partesDataHora[0];
    const horaMinutoString = partesDataHora[1];

    // Validação da data
    const partesData = dataString.split('/');
    if (partesData.length !== 3) {
        mensagemAlertaDataHoraChegada();
        return false;
    }

    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1; 
    const ano = parseInt(partesData[2], 10);

    // Validação da hora e minuto
    const partesHoraMinuto = horaMinutoString.split(':');
    if (partesHoraMinuto.length !== 2) {
        mensagemAlertaDataHoraChegada();
        return false;
    }

    const hora = parseInt(partesHoraMinuto[0], 10);
    const minuto = parseInt(partesHoraMinuto[1], 10);

    const data = new Date(ano, mes, dia, hora, minuto);
    const dataAtual = new Date();
    const seculoAtual = Math.floor(dataAtual.getFullYear() / 100);

    if (
        data.getDate() !== dia || 
        data.getMonth() !== mes || 
        data.getFullYear() !== ano ||
        isNaN(hora) || hora < 0 || hora > 23 ||
        isNaN(minuto) || minuto < 0 || minuto > 59
    ) {
        mensagemAlertaDataHoraChegada();
        return false;
    }

    if (data.getFullYear() < seculoAtual * 100) {
        mensagemAlertaDataChegadaSeculoPassado();
        return false;
    }

    if (data > dataAtual) {
        mensagemAlertaDataHoraChegadaFutura();
        return false;
    }

    $data_hora_chegada.setCustomValidity('');
    return true;
}

document.getElementById('data_hora_chegada').addEventListener('blur', function() {
    const dataHoraDigitada = this.value;
    validarDataHoraChegada(dataHoraDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataHoraDigitada = document.getElementById('data_hora_chegada').value;
    if (!validarDataHoraChegada(dataHoraDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataHoraChegada() {
    'use strict';
  
    var $data_hora_chegada = document.querySelector('#data_hora_chegada');

    var errorsMessage = 'Data ou hora inválida.';
    $data_hora_chegada.setCustomValidity(errorsMessage);
    $data_hora_chegada.reportValidity();
}

function mensagemAlertaDataHoraChegadaFutura() {
    'use strict';

    var $data_hora_chegada = document.querySelector('#data_hora_chegada');

    var errorsMessage = 'Data ou hora futura.';
    $data_hora_chegada.setCustomValidity(errorsMessage);
    $data_hora_chegada.reportValidity();
}

function mensagemAlertaDataChegadaSeculoPassado() {
    'use strict';

    var $data_hora_chegada = document.querySelector('#data_hora_chegada');

    var errorsMessage = 'Data do século passado.';
    $data_hora_chegada.setCustomValidity(errorsMessage);
    $data_hora_chegada.reportValidity();
}

/////////////////////////////// DATA HORA IGUAIS ///////////////////////////////

function validarDataHora(dataHoraSaidaString, dataHoraChegadaString) {
    const partesDataHoraSaida = dataHoraSaidaString.split(' ');
    const dataSaidaString = partesDataHoraSaida[0];
    const horaMinutoSaidaString = partesDataHoraSaida[1];

    const partesDataHoraChegada = dataHoraChegadaString.split(' ');
    const dataChegadaString = partesDataHoraChegada[0];
    const horaMinutoChegadaString = partesDataHoraChegada[1];

    // Validação da data e hora de saída
    const partesDataSaida = dataSaidaString.split('/');
    const diaSaida = parseInt(partesDataSaida[0], 10);
    const mesSaida = parseInt(partesDataSaida[1], 10) - 1;
    const anoSaida = parseInt(partesDataSaida[2], 10);
    const partesHoraMinutoSaida = horaMinutoSaidaString.split(':');
    const horaSaida = parseInt(partesHoraMinutoSaida[0], 10);
    const minutoSaida = parseInt(partesHoraMinutoSaida[1], 10);

    const dataSaida = new Date(anoSaida, mesSaida, diaSaida, horaSaida, minutoSaida);

    // Validação da data e hora de chegada
    const partesDataChegada = dataChegadaString.split('/');
    const diaChegada = parseInt(partesDataChegada[0], 10);
    const mesChegada = parseInt(partesDataChegada[1], 10) - 1;
    const anoChegada = parseInt(partesDataChegada[2], 10);
    const partesHoraMinutoChegada = horaMinutoChegadaString.split(':');
    const horaChegada = parseInt(partesHoraMinutoChegada[0], 10);
    const minutoChegada = parseInt(partesHoraMinutoChegada[1], 10);

    const dataChegada = new Date(anoChegada, mesChegada, diaChegada, horaChegada, minutoChegada);

    if (dataSaida.getTime() === dataChegada.getTime()) {
        mensagemAlertaDataIguais();
        return false;
    }

    const mesesDiferenca = (dataChegada.getFullYear() - dataSaida.getFullYear()) * 12 + dataChegada.getMonth() - dataSaida.getMonth();

    if (mesesDiferenca > 1) {
        mensagemAlertaDataDestoante();
        return false;
    }

    return true;
}

document.getElementById('data_hora_chegada').addEventListener('blur', function() {
    const dataHoraSaida = document.getElementById('data_hora_saida').value;
    const dataHoraChegada = document.getElementById('data_hora_chegada').value;
    validarDataHora(dataHoraSaida, dataHoraChegada);
});

function mensagemAlertaDataIguais() {
    'use strict';

    var $data_hora_saida = document.querySelector('#data_hora_saida');
    var $data_hora_chegada = document.querySelector('#data_hora_chegada');

    var errorsMessage = 'Data e hora de saída são iguais à data e hora de chegada.';
    $data_hora_saida.setCustomValidity(errorsMessage);
    $data_hora_saida.reportValidity();

    $data_hora_chegada.setCustomValidity(errorsMessage);
    $data_hora_chegada.reportValidity();
}


function mensagemAlertaDataDestoante() {
    'use strict';

    var $data_hora_saida = document.querySelector('#data_hora_saida');
    var $data_hora_chegada = document.querySelector('#data_hora_chegada');

    var errorsMessage = 'Data Inválida. Mais de um mês de diferença entre as datas.';
    $data_hora_saida.setCustomValidity(errorsMessage);
    $data_hora_saida.reportValidity();

    $data_hora_chegada.setCustomValidity(errorsMessage);
    $data_hora_chegada.reportValidity();
}

document.getElementById('data_hora_chegada').addEventListener('blur', function() {
    const dataHoraSaida = document.getElementById('data_hora_saida').value;
    const dataHoraChegada = document.getElementById('data_hora_chegada').value;
    validarDataHora(dataHoraSaida, dataHoraChegada);
});
