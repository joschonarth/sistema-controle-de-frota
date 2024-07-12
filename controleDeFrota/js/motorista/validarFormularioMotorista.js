document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("motoristaForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validarCadastroMotorista();
    });
});

function validarCadastroMotorista() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("data_nascimento").value;
    var telefone = document.getElementById("phone").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;
    var numeroRegistro = document.getElementById("numero_registro").value;
    var categoria = document.getElementById("categoria").value;
    var dataValidade = document.getElementById("data_validade").value;
    var dataEmissao = document.getElementById("data_emissao").value;
    
    var camposComErro = document.querySelectorAll("input:invalid, select:invalid, textarea:invalid");
    if (camposComErro.length > 0) {
        return false;
    }

    if (nome === "" || email === "" || dataNascimento === "" || telefone === "" || rg === "" || cpf === "" || numeroRegistro === "" || categoria === "" || dataValidade === "" || dataEmissao === "") {
        return false;
    } else {

        const urlParams = new URLSearchParams(window.location.search);
        const urlID = urlParams.get('id');
        
        if (!urlID) {
            if (nomeJaCadastrado(nome)) {
                if (confirm('Motorista já cadastrado.')) {
                    limparCampos();
                    return false;
                } else {
                    return false;
                }
            }

            if (cpfJaCadastrado(cpf)) {
                if (confirm('CPF já cadastrado.')) {
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

        var form = document.getElementById("motoristaForm");
        form.appendChild(successMessage);

        armazenarMotorista();

        setTimeout(function() {
            form.removeChild(successMessage);
            limparCampos();
        }, 3000);

        return true;
    }
}

function nomeJaCadastrado(nome) {
    let motoristas = localStorage.getItem("Motoristas");
    if (motoristas) {
        motoristas = JSON.parse(motoristas);
        return motoristas.some(motorista => motorista.nome === nome);
    }
    return false; 
}

function cpfJaCadastrado(cpf) {
    let motoristas = localStorage.getItem("Motoristas");
    if (motoristas) {
        motoristas = JSON.parse(motoristas);
        return motoristas.some(motorista => motorista.cpf === cpf);
    }
    return false;
}

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


function armazenarMotorista() {

    if (typeof(Storage) !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const motoristaId = urlParams.get('id');

        if (!motoristaId) {

            const formId = gerarId();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const dataNascimento = document.getElementById("data_nascimento").value;
            const telefone = document.getElementById("phone").value;
            const rg = document.getElementById("rg").value;
            const cpf = document.getElementById("cpf").value;
            const numeroRegistro = document.getElementById("numero_registro").value;
            const categoria = document.getElementById("categoria").value;
            const dataValidade = document.getElementById("data_validade").value;
            const dataEmissao = document.getElementById("data_emissao").value;

            const formData = {
                id: formId,
                nome: nome,
                email: email,
                dataNascimento: dataNascimento,
                telefone: telefone,
                rg: rg,
                cpf: cpf,
                numeroRegistro: numeroRegistro,
                categoria: categoria,
                dataValidade: dataValidade,
                dataEmissao: dataEmissao,
            };

            let motoristas = localStorage.getItem("Motoristas");
            if (motoristas) {
                motoristas = JSON.parse(motoristas);
            } else {
                motoristas = [];
            }

            motoristas.push(formData);

            const motoristasJSON = JSON.stringify(motoristas);

            localStorage.setItem("Motoristas", motoristasJSON);

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