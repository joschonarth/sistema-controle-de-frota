var inputQuilometragemInicial = document.getElementById("quilometragemInicial");
var inputQuilometragemFinal = document.getElementById("quilometragemFinal");
var inputQuilometragemPercorrida = document.getElementById("quilometragemPercorrida");

inputQuilometragemInicial.addEventListener("input", calcularQuilometragem);
inputQuilometragemFinal.addEventListener("blur", calcularQuilometragem);

function calcularQuilometragem() {
    var quilometragemInicial = parseFloat(inputQuilometragemInicial.value);
    var quilometragemFinal = parseFloat(inputQuilometragemFinal.value);

    if (!isNaN(quilometragemInicial) && !isNaN(quilometragemFinal)) {
        var quilometragemPercorrida = quilometragemFinal - quilometragemInicial;

        inputQuilometragemPercorrida.value = quilometragemPercorrida;     
        
        setTimeout(validaQuilometragemTotal, 1000);

    } else {
        inputQuilometragemPercorrida.value = "";
    }
    
}


document.querySelector('form').addEventListener('submit', function(event) {
    if (!validaQuilometragemTotal()) {
        event.preventDefault();
    }
});

function validaQuilometragemTotal() {
    var quilometragemPercorridaInput = document.getElementById("quilometragemPercorrida");
    var quilometragemPercorrida = parseFloat(quilometragemPercorridaInput.value);

    if (quilometragemPercorrida <= 0 || isNaN(quilometragemPercorrida)) {
        mensagemAlertaQuilometragemTotal();
        return false;
    }

    quilometragemPercorridaInput.setCustomValidity('');
    return true;
}

function mensagemAlertaQuilometragemTotal() {
    'use strict';

    var $quilometragemPercorrida = document.querySelector('#quilometragemPercorrida');
    var errorsMessage = 'A quilometragem percorrida deve ser um número positivo e superior a zero.';
    
    $quilometragemPercorrida.removeAttribute("disabled");
    $quilometragemPercorrida.setCustomValidity(errorsMessage);
    $quilometragemPercorrida.reportValidity();

    setTimeout(function() {
        $quilometragemPercorrida.setAttribute("disabled", "disabled");
    }, 3000);
}