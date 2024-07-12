document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("nome").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("data_nascimento").disabled = true;
        document.getElementById("phone").disabled = true;
        document.getElementById("rg").disabled = true;
        document.getElementById("cpf").disabled = true;
        document.getElementById("numero_registro").disabled = true;
        document.getElementById("categoria").disabled = true;
        document.getElementById("data_validade").disabled = true;
        document.getElementById("data_emissao").disabled = true;
    }
});


document.getElementById("botaoAlterar").addEventListener("click", function() {
    if (window.location.href.includes('id=')) {
        document.getElementById("nome").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("data_nascimento").disabled = false;
        document.getElementById("phone").disabled = false;
        document.getElementById("rg").disabled = false;
        document.getElementById("cpf").disabled = false;
        document.getElementById("numero_registro").disabled = false;
        document.getElementById("categoria").disabled = false;
        document.getElementById("data_validade").disabled = false;
        document.getElementById("data_emissao").disabled = false;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    preencherFormularioMotorista();
});

function preencherFormularioMotorista() {
    const urlParams = new URLSearchParams(window.location.search);
    const motoristaId = urlParams.get('id');

    if (motoristaId) {
        const motoristasJSON = localStorage.getItem("Motoristas");
        if (motoristasJSON) {
            const motoristas = JSON.parse(motoristasJSON);
            const motorista = motoristas.find(v => v.id === motoristaId);
            if (motorista) {               
                document.getElementById("nome").value = motorista.nome;
                document.getElementById("email").value = motorista.email;
                document.getElementById("data_nascimento").value = motorista.dataNascimento;
                document.getElementById("phone").value = motorista.telefone;
                document.getElementById("rg").value = motorista.rg;
                document.getElementById("cpf").value = motorista.cpf;
                document.getElementById("numero_registro").value = motorista.numeroRegistro;
                document.getElementById("categoria").value = motorista.categoria;
                document.getElementById("data_validade").value = motorista.dataValidade;
                document.getElementById("data_emissao").value = motorista.dataEmissao;
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
        var motoristas = JSON.parse(localStorage.getItem("Motoristas")) || [];

        var index = motoristas.findIndex(v => v.id === formId);

        if (index !== -1) {
            motoristas.splice(index, 1);
            localStorage.setItem("Motoristas", JSON.stringify(motoristas));

            var row = document.getElementById("row-" + formId);
            if (row) {
                row.parentNode.removeChild(row);
            }

            alert("Cadastro com ID: " + formId + " excluído com sucesso.");
            window.location.href = "controleMotoristas.html";
        } else {
            alert("Cadastro com ID: " + formId + " não encontrado.");
        }
    } else {
    }
});


function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('data_nascimento').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('rg').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('numero_registro').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('data_validade').value = '';
    document.getElementById('data_emissao').value = '';
}

function salvarFormularioMotorista() {
    const urlParams = new URLSearchParams(window.location.search);
    const motoristaId = urlParams.get('id');

    if (motoristaId) {
        const motoristasJSON = localStorage.getItem("Motoristas");
        if (motoristasJSON) {
            const motoristas = JSON.parse(motoristasJSON);
            const motoristaIndex = motoristas.findIndex(v => v.id === motoristaId);

            if (motoristaIndex !== -1) {
                motoristas[motoristaIndex] = {
                    id: motoristaId,
                    nome: document.getElementById("nome").value,
                    email: document.getElementById("email").value,
                    dataNascimento: document.getElementById("data_nascimento").value,
                    telefone: document.getElementById("phone").value,
                    rg: document.getElementById("rg").value,
                    cpf: document.getElementById("cpf").value,
                    numeroRegistro: document.getElementById("numero_registro").value,
                    categoria: document.getElementById("categoria").value,
                    dataValidade: document.getElementById("data_validade").value,
                    dataEmissao: document.getElementById("data_emissao").value,
                };

                localStorage.setItem("Motoristas", JSON.stringify(motoristas));
                alert("Motorista atualizado com sucesso!");
            } 
        } 
    } 
}

document.getElementById("salvar").addEventListener("click", salvarFormularioMotorista);