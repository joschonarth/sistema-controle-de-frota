////////////////// VALIDAR DATA DE NASCIMENTO //////////////////

function validarDataNascimento(dataString) {
    const $data_nascimento = document.querySelector('#data_nascimento');

    if (dataString.trim() === '') {
        $data_nascimento.setCustomValidity('');
        return true;
    }

    const partesData = dataString.split('/');
    if (partesData.length !== 3) {
        mensagemAlertaDataNascimento();
        return false;
    }

    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaDataNascimento();
        return false;
    }

    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0); 
    if (data > dataAtual) {
        mensagemAlertaDataNascimentoFutura(); 
        return false; 
    }

    const idadeMinima = 18;
    const idadeMaxima = 100;
    const diferencaAnos = dataAtual.getFullYear() - data.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = data.getMonth();
    const diaAtual = dataAtual.getDate();
    const diaNascimento = data.getDate();

    if (
        diferencaAnos < idadeMinima || 
        (diferencaAnos === idadeMinima && mesNascimento > mesAtual) ||
        (diferencaAnos === idadeMinima && mesNascimento === mesAtual && diaNascimento > diaAtual)
    ) {
        mensagemAlertaMenorIdade(); 
        return false;
    }

    if (
        diferencaAnos > idadeMaxima ||
        (diferencaAnos === idadeMaxima && mesNascimento < mesAtual) ||
        (diferencaAnos === idadeMaxima && mesNascimento === mesAtual && diaNascimento < diaAtual)
    ) {
        mensagemAlertaAcimaDaIdade();
        return false;
    }

    $data_nascimento.setCustomValidity('');
    return true;
}

document.getElementById('data_nascimento').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarDataNascimento(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('data_nascimento').value;
    if (!validarDataNascimento(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataNascimento() {
    'use strict';
  
    var $data_nascimento = document.querySelector('#data_nascimento');

    var errorsMessage = 'Data Inválida.';
    $data_nascimento.setCustomValidity(errorsMessage);
    $data_nascimento.reportValidity();
}

function mensagemAlertaDataNascimentoFutura() {
    'use strict';

    var $data_nascimento = document.querySelector('#data_nascimento');

    var errorsMessage = 'Data Futura.';
    $data_nascimento.setCustomValidity(errorsMessage);
    $data_nascimento.reportValidity();
}

function mensagemAlertaMenorIdade() {
    'use strict';

    var $data_nascimento = document.querySelector('#data_nascimento');

    var errorsMessage = 'Data Inválida! Pessoa não tem idade para dirigir.';
    $data_nascimento.setCustomValidity(errorsMessage);
    $data_nascimento.reportValidity();
}

function mensagemAlertaAcimaDaIdade() {
    'use strict';

    var $data_nascimento = document.querySelector('#data_nascimento');

    var errorsMessage = 'Data Inválida!';
    $data_nascimento.setCustomValidity(errorsMessage);
    $data_nascimento.reportValidity();
}

////////////////// VALIDAR DATA DE VALIDADE //////////////////

function validarDataValidade(dataString) {
    const $data_validade = document.querySelector('#data_validade');

    if (dataString.trim() === '') {
        $data_validade.setCustomValidity('');
        return true;
    }

    const partesData = dataString.split('/');
    if (partesData.length !== 3) {
        mensagemAlertaDataValidade();
        return false;
    }

    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaDataValidade();
        return false;
    }

    const dataAtual = new Date();
    if (data < dataAtual) {
        $data_validade.setCustomValidity('A validade da CNH está vencida.');
        $data_validade.reportValidity();
        return false;
    }

    $data_validade.setCustomValidity('');
    return true;
}

document.getElementById('data_validade').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarDataValidade(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('data_validade').value;
    if (!validarDataValidade(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataValidade() {
    'use strict';
  
    var $data_validade = document.querySelector('#data_validade');

    var errorsMessage = 'Data Inválida.';
    $data_validade.setCustomValidity(errorsMessage);
    $data_validade.reportValidity();
}


////////////////// VALIDAR DATA DE EMISSÃO //////////////////

function validarDataEmissao(dataString) {
    const $data_emissao = document.querySelector('#data_emissao');

    if (dataString.trim() === '') {
        $data_emissao.setCustomValidity('');
        return true;
    }

    const partesData = dataString.split('/');
    if (partesData.length !== 3) {
        mensagemAlertaDataEmissao();
        return false;
    }

    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);

    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        mensagemAlertaDataEmissao();
        return false;
    }

    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    if (data > dataAtual) {
        mensagemAlertaDataEmissaoFutura();
        return false;
    }

    $data_emissao.setCustomValidity('');
    return true;
}

document.getElementById('data_emissao').addEventListener('blur', function() {
    const dataDigitada = this.value;
    validarDataEmissao(dataDigitada);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const dataDigitada = document.getElementById('data_emissao').value;
    if (!validarDataEmissao(dataDigitada)) {
        event.preventDefault();
    }
});

function mensagemAlertaDataEmissao() {
    'use strict';
  
    var $data_emissao = document.querySelector('#data_emissao');

    var errorsMessage = 'Data Inválida.';
    $data_emissao.setCustomValidity(errorsMessage);
    $data_emissao.reportValidity();
}

function mensagemAlertaDataEmissaoFutura() {
    'use strict';

    var $data_emissao = document.querySelector('#data_emissao');

    var errorsMessage = 'Data Futura.';
    $data_emissao.setCustomValidity(errorsMessage);
    $data_emissao.reportValidity();
}


////////////////// VALIDAR NÚMERO DE REGISTRO //////////////////

document.getElementById('numero_registro').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }

    this.setCustomValidity('');
});

function validarNumeroRegistro(registro) {
    if (registro.trim() === '') {
        return true;
    }
    
    const regexRegistro = /^[0-9]{11}$/;
    
    if (!regexRegistro.test(registro)) {
        mensagemAlertaRegistro();
        return false;
    }
    
    return true;
}

document.getElementById('numero_registro').addEventListener('blur', function() {
    const registroDigitado = this.value;
    validarNumeroRegistro(registroDigitado);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const registroDigitado = document.getElementById('numero_registro').value;
    if (!validarNumeroRegistro(registroDigitado)) {
        event.preventDefault();
    }
});

function mensagemAlertaRegistro() {
    'use strict';
  
    var $numero_registro = document.querySelector('#numero_registro');

    var errorsMessage = 'Número de Registro inválido.';
    $numero_registro.setCustomValidity(errorsMessage);
    $numero_registro.reportValidity();
}

////////////////// VALIDAR EMAIL //////////////////

function validarEmail(email) {
    if (email.trim() === '') {
        return true;
    }

    // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexEmail = /^[^\s@]+@(?:[^\s@]+\.)+(?:com|edu|br)$/;

    if (!regexEmail.test(email)) {
        mensagemAlertaEmail();
        return false;
    }
    
    return true;
}

document.getElementById('email').addEventListener('input', function() {
    this.setCustomValidity('');
});

document.getElementById('email').addEventListener('blur', function() {
    const emailDigitado = this.value;
    validarEmail(emailDigitado);
});

document.querySelector('form').addEventListener('submit', function(event) {
    const emailDigitado = document.getElementById('email').value;
    if (!validarEmail(emailDigitado)) {
        event.preventDefault();
    }
});

function mensagemAlertaEmail() {
    'use strict';
  
    var $email = document.querySelector('#email');

    var errorsMessage = 'Email inválido.';
    $email.setCustomValidity(errorsMessage);
    $email.reportValidity();
}


////////////////// VALIDAR NOME //////////////////

document.getElementById('nome').addEventListener('input', function() {
    this.value = this.value.replace(/[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, '');
})

function validarNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s']+$/;

    if (nome.trim() !== '' && !regexNome.test(nome)) {
        mensagemAlertaNome();
    }
    
}

document.getElementById('nome').addEventListener('blur', function() {
    const nomeDigitado = this.value;
    validarNome(nomeDigitado);
});


function mensagemAlertaNome() {
    'use strict';
  
    var $nome = document.querySelector('#nome');

    var errorsMessage = 'Nome inválido.';
    $nome.setCustomValidity(errorsMessage);
    $nome.reportValidity();
}