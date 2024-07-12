document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("placa").disabled = true;
        document.getElementById("marca").disabled = true;
        document.getElementById("modelo").disabled = true;
        document.getElementById("ano_fabricacao").disabled = true;
        document.getElementById("cor").disabled = true;
        document.getElementById("data_aquisicao").disabled = true;
        document.getElementById("licenciamento").disabled = true;
        document.getElementById("renavam").disabled = true;
        document.getElementById("km_inicial").disabled = true;
        document.getElementById("categoriaVeiculo").disabled = true;
        document.getElementById("tipoCombustivel").disabled = true;
        }
});


document.getElementById("botaoAlterar").addEventListener("click", function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("placa").disabled = false;
        document.getElementById("marca").disabled = false;
        document.getElementById("modelo").disabled = false;
        document.getElementById("ano_fabricacao").disabled = false;
        document.getElementById("cor").disabled = false;
        document.getElementById("data_aquisicao").disabled = false;
        document.getElementById("licenciamento").disabled = false;
        document.getElementById("renavam").disabled = false;
        document.getElementById("km_inicial").disabled = false;
        document.getElementById("categoriaVeiculo").disabled = false;
        document.getElementById("tipoCombustivel").disabled = false;
    }
});



document.addEventListener("DOMContentLoaded", function() {
    preencherFormularioVeiculo();
});

function preencherFormularioVeiculo() {
    const urlParams = new URLSearchParams(window.location.search);
    const veiculoId = urlParams.get('id');

    if (veiculoId) {
        const veiculosJSON = localStorage.getItem("Veiculos");
        if (veiculosJSON) {
            const veiculos = JSON.parse(veiculosJSON);
            const veiculo = veiculos.find(v => v.id === veiculoId);
            if (veiculo) {               
                document.getElementById("placa").value = veiculo.placa;
                document.getElementById("marca").value = veiculo.marca;
                document.getElementById("modelo").value = veiculo.modelo;
                document.getElementById("ano_fabricacao").value = veiculo.anoFabricacao;
                document.getElementById("cor").value = veiculo.cor;
                document.getElementById("data_aquisicao").value = veiculo.dataAquisicao;
                document.getElementById("licenciamento").value = veiculo.licenciamento;
                document.getElementById("renavam").value = veiculo.renavam;
                document.getElementById("km_inicial").value = veiculo.kmInicial;
                document.getElementById("categoriaVeiculo").value = veiculo.categoriaVeiculo;
                document.getElementById("tipoCombustivel").value = veiculo.tipoCombustivel;

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

    var confirmar = confirm("Deseja confirmar a exclusão do cadastro com ID: " + formId + "?");

    if (confirmar) {
        var veiculos = JSON.parse(localStorage.getItem("Veiculos")) || [];

        var index = veiculos.findIndex(v => v.id === formId);

        if (index !== -1) {
            veiculos.splice(index, 1);
            localStorage.setItem("Veiculos", JSON.stringify(veiculos));

            var row = document.getElementById("row-" + formId);
            if (row) {
                row.parentNode.removeChild(row);
            }

            alert("Cadastro com ID: " + formId + " excluído com sucesso.");
            window.location.href = "controleVeiculos.html";
        } else {
            alert("Cadastro com ID: " + formId + " não encontrado.");
        }
    } 
});


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


function salvarFormularioVeiculo() {
    const urlParams = new URLSearchParams(window.location.search);
    const veiculoId = urlParams.get('id');

    if (veiculoId) {
        const veiculosJSON = localStorage.getItem("Veiculos");
        if (veiculosJSON) {
            const veiculos = JSON.parse(veiculosJSON);
            const veiculoIndex = veiculos.findIndex(v => v.id === veiculoId);

            if (veiculoIndex !== -1) {
                veiculos[veiculoIndex] = {
                    id: veiculoId, 
                    placa: document.getElementById("placa").value,
                    marca: document.getElementById("marca").value,
                    modelo: document.getElementById("modelo").value,
                    anoFabricacao: document.getElementById("ano_fabricacao").value,
                    cor: document.getElementById("cor").value,
                    dataAquisicao: document.getElementById("data_aquisicao").value,
                    licenciamento: document.getElementById("licenciamento").value,
                    renavam: document.getElementById("renavam").value,
                    kmInicial: document.getElementById("km_inicial").value,
                    categoriaVeiculo: document.getElementById("categoriaVeiculo").value,
                    tipoCombustivel: document.getElementById("tipoCombustivel").value,
                };

                localStorage.setItem("Veiculos", JSON.stringify(veiculos));
                alert("Veículo atualizado com sucesso!");
            } 
        } 
    } 
} 

document.getElementById("salvar").addEventListener("click", salvarFormularioVeiculo);
