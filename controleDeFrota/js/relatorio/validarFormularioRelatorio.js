document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("relatorioForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    var veiculo = document.getElementById("veiculo").value;
    var motorista = document.getElementById("motorista").value;
    var dataHoraSaida = document.getElementById("data_hora_saida").value;
    var dataHoraChegada = document.getElementById("data_hora_chegada").value;
    var quilometragemInicial = document.getElementById("quilometragemInicial").value;
    var quilometragemFinal = document.getElementById("quilometragemFinal").value;
    var quilometragemPercorrida = document.getElementById("quilometragemPercorrida").value;
    var itinerario = document.getElementById("itinerario").value;
    
    var camposComErro = document.querySelectorAll("input:invalid, select:invalid, textarea:invalid");
    if (camposComErro.length > 0) {
        return false;
    }

    if (veiculo === "" || motorista === "" || dataHoraSaida === "" || dataHoraChegada === "" || quilometragemInicial === "" || quilometragemFinal === "" || quilometragemPercorrida === "" || quilometragemPercorrida <= 0 ||  itinerario === "") {
        return false;
    } else {

        var successMessage = document.createElement("div");
        successMessage.className = "successMessage";
        successMessage.innerHTML = "Registro concluído com sucesso!";

        var form = document.getElementById("relatorioForm");
        form.appendChild(successMessage);

        armazenarRelatorio();

        setTimeout(function() {
            form.removeChild(successMessage);
            gerarPDF();
        }, 3000);
    }
}

function relatorioJaCadastrado(veiculo, motorista, dataHoraSaida) {
    let viagens = localStorage.getItem("Viagens");
    if (viagens) {
        viagens = JSON.parse(viagens);
        return viagens.some(viagem => viagem.veiculo === veiculo && viagem.motorista === motorista && viagem.dataHoraSaida == dataHoraSaida);
    }
    return false;
}

function gerarPDF() {
    var veiculo = document.getElementById('veiculo').value;
    var motorista = document.getElementById('motorista').value;
    var dataHoraSaida = document.getElementById('data_hora_saida').value;
    var dataHoraChegada = document.getElementById('data_hora_chegada').value;
    var quilometragemInicial = document.getElementById('quilometragemInicial').value;
    var quilometragemFinal = document.getElementById('quilometragemFinal').value;
    var quilometragemPercorrida = document.getElementById('quilometragemPercorrida').value;
    var itinerario = document.getElementById('itinerario').value;
    var observacao = document.getElementById('observacao').value;

    var content = `
        <h1 style="font-size: 30px; text-align: center;">Informações da Viagem</h1><br><br>
        <p><strong>Veículo:</strong> ${veiculo}</p><br>
        <p><strong>Motorista:</strong> ${motorista}</p><br>
        <p><strong>Data e Hora de Saída:</strong> ${dataHoraSaida}</p><br>
        <p><strong>Data e Hora de Chegada:</strong> ${dataHoraChegada}</p><br>
        <p><strong>Quilometragem Inicial:</strong> ${quilometragemInicial} Km</p><br>
        <p><strong>Quilometragem Final:</strong> ${quilometragemFinal} Km</p><br>
        <p><strong>Quilometragem Percorrida:</strong> ${quilometragemPercorrida} Km</p><br>
        <p><strong>Itinerário:</strong> ${itinerario}</p><br>
        <p style="white-space: pre-line;"><strong>Observação:</strong> ${observacao}</p>
    `;

    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();

    var formattedDate = day + "-" + month + "-" + year;

    var opt = {
        margin: 1,
        filename: 'registro-' + veiculo + '-' + formattedDate + '.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(content).set(opt).save();

    limparCampos();
}

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

function armazenarRelatorio() {
    if (typeof(Storage) !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const viagemId = urlParams.get('id');
        
        if (!viagemId) {
 
            const formId = gerarId();

            const veiculo = document.getElementById("veiculo").value;
            const motorista = document.getElementById("motorista").value;
            const dataHoraSaida = document.getElementById("data_hora_saida").value;
            const dataHoraChegada = document.getElementById("data_hora_chegada").value;
            const quilometragemInicial = document.getElementById("quilometragemInicial").value;
            const quilometragemFinal = document.getElementById("quilometragemFinal").value;
            const quilometragemPercorrida = document.getElementById("quilometragemPercorrida").value;
            const itinerario = document.getElementById("itinerario").value;

            const formData = {
                id: formId,
                veiculo: veiculo,
                motorista: motorista,
                dataHoraSaida: dataHoraSaida,
                dataHoraChegada: dataHoraChegada,
                quilometragemInicial: quilometragemInicial,
                quilometragemFinal: quilometragemFinal,
                quilometragemPercorrida: quilometragemPercorrida,
                itinerario: itinerario,
            };

            let viagens = localStorage.getItem("Viagens");
            if (viagens) {
                viagens = JSON.parse(viagens);
            } else {
                viagens = [];
            }

            viagens.push(formData);

            const viagensJSON = JSON.stringify(viagens);

            localStorage.setItem("Viagens", viagensJSON);
        } 
    } 
}

function gerarId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function gerarDataId() {
    let dataAtual = new Date();
    let dataID = (dataAtual.getDate().toString().padStart(2, '0')) +
                    dataAtual.getHours().toString().padStart(2, '0') +
                    dataAtual.getMinutes().toString().padStart(2, '0') +
                    dataAtual.getSeconds().toString().padStart(2, '0');
    return dataID;
}