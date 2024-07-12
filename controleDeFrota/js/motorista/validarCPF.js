function validarCPF() {
  var $cpf = document.getElementById("cpf");
  var cpf = $cpf.value;

  if (cpf.trim() === "") {
      $cpf.setCustomValidity('');
      return true;
  }

  cpf = cpf.replace(/\D/g, '');

  if (cpf.length === 11) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  $cpf.value = cpf;

  if (cpf.length === 14 && validaCPF(cpf)) {
      $cpf.setCustomValidity('');
      return true;
  } else {
      mensagemAlerta();
      return false;
  }
}

function validaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;

  strCPF = strCPF.replace(/\D/g, '');

  if (/^(\d)\1+$/.test(strCPF)) return false;

  for (var i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

document.getElementById('cpf').addEventListener('blur', function() {
  validarCPF();
});

document.querySelector('form').addEventListener('submit', function(event) {
  if (!validarCPF()) {
      event.preventDefault();
  }
});

function mensagemAlerta() {
  'use strict';

  var $cpf = document.querySelector('#cpf');

  var errorsMessage = 'CPF Inválido.';
  $cpf.setCustomValidity(errorsMessage);
  $cpf.reportValidity();
}