document.addEventListener('DOMContentLoaded', function () {
    let motoristas = JSON.parse(localStorage.getItem('Motoristas')) || [];
    let motoristaSelect = document.getElementById('motorista');

    if (motoristas.length === 0) {
        const option = document.createElement('option');
        option.textContent = 'Nenhum motorista cadastrado ainda';
        option.disabled = true;
        motoristaSelect.appendChild(option);
    } else {
        motoristas.forEach(function(motorista) {
            const option = document.createElement('option');
            option.textContent = motorista.nome;
            motoristaSelect.appendChild(option);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let veiculos = JSON.parse(localStorage.getItem('Veiculos')) || [];
    let veiculoSelect = document.getElementById('veiculo');

    if (veiculos.length === 0) {
        const option = document.createElement('option');
        option.textContent = 'Nenhum veículo cadastrado ainda';
        option.disabled = true;
        veiculoSelect.appendChild(option);
    } else {
        veiculos.forEach(function(veiculo) {
            const option = document.createElement('option');
            option.textContent = veiculo.placa;
            veiculoSelect.appendChild(option);
        });
    }
});
