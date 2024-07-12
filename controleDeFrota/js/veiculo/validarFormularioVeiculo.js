document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("veiculoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validarCadastroVeiculo();
    });
});

function validarCadastroVeiculo() {
    var placa = document.getElementById("placa").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var anoFabricacao = document.getElementById("ano_fabricacao").value;
    var cor = document.getElementById("cor").value;
    var dataAquisicao = document.getElementById("data_aquisicao").value;
    var licenciamento = document.getElementById("licenciamento").value;
    var renavam = document.getElementById("renavam").value;
    var kmInicial = document.getElementById("km_inicial").value;
    var categoriaVeiculo = document.getElementById("categoriaVeiculo").value;
    var tipoCombustivel = document.getElementById("tipoCombustivel").value;

    var camposComErro = document.querySelectorAll("input:invalid, select:invalid, textarea:invalid");
    if (camposComErro.length > 0) {
        return false;
    }
    
    if (placa === "" || marca === "" || modelo === "" || anoFabricacao === "" || cor === "" || dataAquisicao === "" || licenciamento === "" || renavam === "" || kmInicial === "" || categoriaVeiculo === "" || tipoCombustivel === "") {
        return false;
    } else {

        const urlParams = new URLSearchParams(window.location.search);
        const urlID = urlParams.get('id');
        
        if (!urlID) {
            if (veiculoJaCadastrado(placa)) {
                if (confirm('Placa já cadastrada.')) {
                    limparCampos();
                    return false;
                } else {
                    return false;
                }
            }
        }
      
        var successMessage = document.createElement("div");
        successMessage.className = "successMessage";
        successMessage.innerHTML = "Cadastro concluído com sucesso!";

        var form = document.getElementById("veiculoForm");
        form.appendChild(successMessage);

        armazenarVeiculo();

        setTimeout(function() {
            form.removeChild(successMessage);
            limparCampos();
        }, 3000);

    }
}

function veiculoJaCadastrado(placa) {
    let veiculos = localStorage.getItem("Veiculos");
    if (veiculos) {
        veiculos = JSON.parse(veiculos);
        return veiculos.some(veiculo => veiculo.placa === placa);
    }
    return false;
}

function limparCampos() {
    document.getElementById('placa').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('ano_fabricacao').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('data_aquisicao').value = '';
    document.getElementById('licenciamento').value = '';
    document.getElementById('renavam').value = '';
    document.getElementById('km_inicial').value = '';
    document.getElementById('categoriaVeiculo').value = '';
    document.getElementById('tipoCombustivel').value = ''; 
}


function armazenarVeiculo() {

    if (typeof(Storage) !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const veiculoId = urlParams.get('id');

        if (!veiculoId) {
    
            const formId = gerarId();

            const placa = document.getElementById("placa").value;
            const marca = document.getElementById("marca").value;
            const modelo = document.getElementById("modelo").value;
            const anoFabricacao = document.getElementById("ano_fabricacao").value;
            const cor = document.getElementById("cor").value;
            const dataAquisicao = document.getElementById("data_aquisicao").value;
            const licenciamento = document.getElementById("licenciamento").value;
            const renavam = document.getElementById("renavam").value;
            const kmInicial = document.getElementById("km_inicial").value;
            const categoriaVeiculo = document.getElementById("categoriaVeiculo").value;
            const tipoCombustivel = document.getElementById("tipoCombustivel").value;

            const formData = {
                id: formId,
                placa: placa,
                marca: marca,
                modelo: modelo,
                anoFabricacao: anoFabricacao,
                cor: cor,
                dataAquisicao: dataAquisicao,
                licenciamento: licenciamento,
                renavam: renavam,
                kmInicial: kmInicial,
                categoriaVeiculo: categoriaVeiculo,
                tipoCombustivel: tipoCombustivel,
            };

            let veiculos = localStorage.getItem("Veiculos");
            if (veiculos) {
                veiculos = JSON.parse(veiculos);
            } else {
                veiculos = [];
            }

            veiculos.push(formData);

            const veiculosJSON = JSON.stringify(veiculos);

            localStorage.setItem("Veiculos", veiculosJSON);

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