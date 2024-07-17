document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("veiculo").disabled = true;
        document.getElementById("motorista").disabled = true;
        document.getElementById("data_hora_saida").disabled = true;
        document.getElementById("data_hora_chegada").disabled = true;
        document.getElementById("quilometragemInicial").disabled = true;
        document.getElementById("quilometragemFinal").disabled = true;
        document.getElementById("itinerario").disabled = true;
    }
});


document.getElementById("botaoAlterar").addEventListener("click", function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("veiculo").disabled = false;
        document.getElementById("motorista").disabled = false;
        document.getElementById("data_hora_saida").disabled = false;
        document.getElementById("data_hora_chegada").disabled = false;
        document.getElementById("quilometragemInicial").disabled = false;
        document.getElementById("quilometragemFinal").disabled = false;
        document.getElementById("itinerario").disabled = false;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    preencherFormulario();
});

function preencherFormulario() {
    const urlParams = new URLSearchParams(window.location.search);
    const viagemId = urlParams.get('id');

    if (viagemId) {
        const viagensJSON = localStorage.getItem("Viagens");
        if (viagensJSON) {
            const viagens = JSON.parse(viagensJSON);
            const viagem = viagens.find(v => v.id === viagemId);
            if (viagem) {
                document.getElementById("veiculo").value = viagem.veiculo;
                document.getElementById("motorista").value = viagem.motorista;
                document.getElementById("data_hora_saida").value = viagem.dataHoraSaida;
                document.getElementById("data_hora_chegada").value = viagem.dataHoraChegada;
                document.getElementById("quilometragemInicial").value = viagem.quilometragemInicial;
                document.getElementById("quilometragemFinal").value = viagem.quilometragemFinal;
                document.getElementById("quilometragemPercorrida").value = viagem.quilometragemPercorrida;
                document.getElementById("itinerario").value = viagem.itinerario;
            }
        } 
    } 
}

document.getElementById("botaoExcluir").addEventListener("click", function(event) {
    event.preventDefault();
    
    function getParameterByName(name) {
        let url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    var formId = getParameterByName("id");

    if (!formId) {
        limparCampos();
        return;
    }

    var confirmar = confirm("Deseja confirmar a exclusão do formulário com ID: " + formId + "?");

    if (confirmar) {
        var viagens = JSON.parse(localStorage.getItem("Viagens")) || [];

        var index = viagens.findIndex(v => v.id === formId);

        if (index !== -1) {
            viagens.splice(index, 1);
            localStorage.setItem("Viagens", JSON.stringify(viagens));

            var row = document.getElementById("row-" + formId);
            if (row) {
                row.parentNode.removeChild(row);
            }

            alert("Formulário com ID: " + formId + " excluído com sucesso.");

            window.location.href = "controleViagens.html";
        } else {
            alert("Formulário com ID: " + formId + " não encontrado.");
        }
    } else {

    }
});

function limparCampos() {
    document.getElementById('veiculo').value = '';
    document.getElementById('motorista').value = '';
    document.getElementById('data_hora_saida').value = '';
    document.getElementById('data_hora_chegada').value = '';
    document.getElementById('quilometragemInicial').value = '';
    document.getElementById('quilometragemFinal').value = '';
    document.getElementById('quilometragemPercorrida').value = '';
    document.getElementById('itinerario').value = '';
    document.getElementById('observacao').value = '';
}


function salvarFormulario() {
    const urlParams = new URLSearchParams(window.location.search);
    const viagemId = urlParams.get('id');

    if (viagemId) {
        const viagensJSON = localStorage.getItem("Viagens");
        if (viagensJSON) {
            const viagens = JSON.parse(viagensJSON);
            const viagemIndex = viagens.findIndex(v => v.id === viagemId);

            if (viagemIndex !== -1) {
                viagens[viagemIndex] = {
                    id: viagemId,
                    veiculo: document.getElementById("veiculo").value,
                    motorista: document.getElementById("motorista").value,
                    dataHoraSaida: document.getElementById("data_hora_saida").value,
                    dataHoraChegada: document.getElementById("data_hora_chegada").value,
                    quilometragemInicial: document.getElementById("quilometragemInicial").value,
                    quilometragemFinal: document.getElementById("quilometragemFinal").value,
                    quilometragemPercorrida: document.getElementById("quilometragemPercorrida").value,
                    itinerario: document.getElementById("itinerario").value
                };

                localStorage.setItem("Viagens", JSON.stringify(viagens));
                alert("Registro atualizado com sucesso!");
            } 
        } 
    } 
}

document.getElementById("relatorioLink").addEventListener("click", salvarFormulario);