document.addEventListener('DOMContentLoaded', function () {
    let motoristas = JSON.parse(localStorage.getItem('Motoristas')) || [];
    let motoristaSelect = document.getElementById('motorista');

    motoristas.forEach(function(motorista) {
        const option = document.createElement('option');
        option.textContent = motorista.nome;
        motoristaSelect.appendChild(option);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let veiculos = JSON.parse(localStorage.getItem('Veiculos')) || [];
    let veiculoSelect = document.getElementById('veiculo');

    veiculos.forEach(function(veiculo) {
        const option = document.createElement('option');
        option.textContent = veiculo.placa;
        veiculoSelect.appendChild(option);
    });
});