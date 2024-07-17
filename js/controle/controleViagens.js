document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("tableBody");

    const viagensJSON = localStorage.getItem("Viagens");
    console.log("Dados no Local Storage:", viagensJSON);

    if (viagensJSON) {
        const viagens = JSON.parse(viagensJSON);
        console.log("Dados após parse:", viagens);

        if (Array.isArray(viagens)) {
            viagens.forEach((formData, index) => {
                const formId = formData.id;
                console.log("ID da viagem:", formId);

                const row = document.createElement("tr");
                row.style.height = "65px";
                row.id = "row-" + formId;

                // Coluna ID
                const idCell = document.createElement("td");
                idCell.classList.add("u-table-cell");
                idCell.textContent = formId;
                row.appendChild(idCell);

                // Coluna Veículo
                const veiculoCell = document.createElement("td");
                veiculoCell.classList.add("u-table-cell");
                veiculoCell.textContent = formData.veiculo;
                row.appendChild(veiculoCell);

                // Coluna Motorista
                const motoristaCell = document.createElement("td");
                motoristaCell.classList.add("u-table-cell");
                motoristaCell.textContent = formData.motorista;
                row.appendChild(motoristaCell);

                // Coluna Data/Hora Saída
                const dataHoraSaidaCell = document.createElement("td");
                dataHoraSaidaCell.classList.add("u-table-cell");
                dataHoraSaidaCell.textContent = formData.dataHoraSaida;
                row.appendChild(dataHoraSaidaCell);

                // Coluna Data/Hora Chegada
                const dataHoraChegadaCell = document.createElement("td");
                dataHoraChegadaCell.classList.add("u-table-cell");
                dataHoraChegadaCell.textContent = formData.dataHoraChegada;
                row.appendChild(dataHoraChegadaCell);

                // Coluna Editar
                const editCell = document.createElement("td");
                editCell.classList.add("u-table-cell");
                const editButton = document.createElement("button");
                editButton.classList.add("botaoEditar")
                editButton.setAttribute("id", "botaoEditar");
                editButton.textContent = "View";
                editButton.addEventListener("click", function() {
                    window.location.href = "relatorio.html?id=" + formId;
                });
                editCell.appendChild(editButton);
                row.appendChild(editCell);

                // Coluna Excluir
                const deleteCell = document.createElement("td");
                deleteCell.classList.add("u-table-cell");
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("botaoExcluir");
                deleteButton.setAttribute("id", "botaoExcluir");
                deleteButton.textContent = "Excluir";
                deleteButton.addEventListener("click", function() {
                    if (confirm("Deseja confirmar a exclusão do formulário com ID: " + formId + "?")) {
                        const updatedViagens = viagens.filter(v => v.id !== formId);
                        localStorage.setItem("Viagens", JSON.stringify(updatedViagens));

                        tableBody.removeChild(row);

                        alert("Formulário com ID: " + formId + " excluído com sucesso.");
                    }
                });
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            });
        } 
    }
});