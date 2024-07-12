////////////////// VALIDAR DATA ANO FABRICAÇÃO //////////////////

function validarAnoFabricacao(dataString) {
    if (dataString.trim() === '') {
        return true;
    }

    const partesData = dataString.split('/');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaAnoFabricacao();
        return false;
    }

    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    if (data > dataAtual) {
        mensagemAlertaAnoFabricacaoDataFutura();
        return false;
    }
    return true;
}

document.getElementById('ano_fabricacao').addEventListener('input', function() {
    this.setCustomValidity('');
});

document.getElementById('ano_fabricacao').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarAnoFabricacao(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('ano_fabricacao').value;
    if (!validarAnoFabricacao(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaAnoFabricacao() {
    'use strict';
  
    var $ano_fabricacao = document.querySelector('#ano_fabricacao');

    var errorsMessage = 'Data Inválida.';
    $ano_fabricacao.setCustomValidity(errorsMessage);
    $ano_fabricacao.reportValidity();
}

function mensagemAlertaAnoFabricacaoDataFutura() {
    'use strict';

    var $ano_fabricacao = document.querySelector('#ano_fabricacao');

    var errorsMessage = 'Data Futura.';
    $ano_fabricacao.setCustomValidity(errorsMessage);
    $ano_fabricacao.reportValidity();
}

////////////////// VALIDAR DATA AQUISIÇÃO //////////////////

function validarDataAquisicao(dataString) {
    if (dataString.trim() === '') {
        return true;
    }

    const partesData = dataString.split('/');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaDataAquisicao();
        return false;
    }

    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    if (data > dataAtual) {
        mensagemAlertaDataAquisicaoFutura();
        return false;
    }
    return true;
}

document.getElementById('data_aquisicao').addEventListener('input', function() {
    this.setCustomValidity('');
});

document.getElementById('data_aquisicao').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarDataAquisicao(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('data_aquisicao').value;
    if (!validarDataAquisicao(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataAquisicao() {
    'use strict';
  
    var $data_aquisicao = document.querySelector('#data_aquisicao');

    var errorsMessage = 'Data Inválida.';
    $data_aquisicao.setCustomValidity(errorsMessage);
    $data_aquisicao.reportValidity();
}

function mensagemAlertaDataAquisicaoFutura() {
    'use strict';

    var $data_aquisicao = document.querySelector('#data_aquisicao');

    var errorsMessage = 'Data Futura.';
    $data_aquisicao.setCustomValidity(errorsMessage);
    $data_aquisicao.reportValidity();
}


////////////////// VALIDAR DATA LICENCIAMENTO //////////////////

function validarDataLicenciamento(dataString) {
    if (dataString.trim() === '') {
        return true;
    }

    const partesData = dataString.split('/');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaLicenciamento();
        return false;
    }

    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    if (data < dataAtual) {
        mensagemAlertaLicenciamentoAtrasado();
        return false;
    }
    return true;
}

document.getElementById('licenciamento').addEventListener('input', function() {
    this.setCustomValidity('');
});

document.getElementById('licenciamento').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarDataLicenciamento(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('licenciamento').value;
    if (!validarDataLicenciamento(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaLicenciamento() {
    'use strict';
  
    var $licenciamento = document.querySelector('#licenciamento');

    var errorsMessage = 'Data Inválida.';
    $licenciamento.setCustomValidity(errorsMessage);
    $licenciamento.reportValidity();
}

function mensagemAlertaLicenciamentoAtrasado() {
    'use strict';

    var $licenciamento = document.querySelector('#licenciamento');

    var errorsMessage = 'Licenciamento atrasado.';
    $licenciamento.setCustomValidity(errorsMessage);
    $licenciamento.reportValidity();
}


////////////////// VALIDAR PLACA //////////////////

function validarPlaca(placa) {
    const regexPlaca = /^[A-Za-z]{3}[0-9]{4}$|^[A-Za-z]{4}[0-9]{3}$/;
    const $placa = document.querySelector('#placa');

    if (placa.trim() !== '' && !regexPlaca.test(placa)) {
        mensagemAlertaPlaca();
    } else {
        $placa.setCustomValidity('');
    }
}

function mensagemAlertaPlaca() {
    'use strict';
  
    var $placa = document.querySelector('#placa');
    var errorsMessage = 'Placa inválida.';

    $placa.setCustomValidity(errorsMessage);
    $placa.reportValidity();
}

document.getElementById('placa').addEventListener('blur', function() {
    const placaDigitada = this.value;
    validarPlaca(placaDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const placaDigitada = document.getElementById('placa').value;
    validarPlaca(placaDigitada);

    if (!document.getElementById('placa').checkValidity()) {
        event.preventDefault();
    }
});


////////////////// VALIDAR NÚMERO DE RENAVAM //////////////////

document.getElementById('renavam').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }

    this.setCustomValidity('');
});

function validarNumeroRenavam(renavam) {
    const regexRenavam = /^\d{9}(\d{2})?$/;

    if (renavam.trim() === '') {
        return true;
    }

    if (!regexRenavam.test(renavam)) {
        mensagemAlertaRenavam('Número de RENAVAM inválido.');
        return false;
    }

    if (/^(\d)\1+$/.test(renavam)) {
        mensagemAlertaRenavam('Número de RENAVAM inválido.');
        return false;
    }

    return true;
}

document.getElementById('renavam').addEventListener('blur', function() {
    const renavamDigitado = this.value;
    validarNumeroRenavam(renavamDigitado);
});

function mensagemAlertaRenavam(message) {
    'use strict';
  
    var $renavam = document.querySelector('#renavam');
    $renavam.setCustomValidity(message);
    $renavam.reportValidity();
}


document.querySelector('form').addEventListener('submit', function(event) {
    const renavamDigitado = document.getElementById('renavam').value;
    if (!validarNumeroRenavam(renavamDigitado)) {
        event.preventDefault();
    }
});