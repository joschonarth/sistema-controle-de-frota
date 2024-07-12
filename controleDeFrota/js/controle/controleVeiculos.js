document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("tableBody");

    const veiculosJSON = localStorage.getItem("Veiculos");
    console.log("Dados no Local Storage:", veiculosJSON);

    if (veiculosJSON) {
        const veiculos = JSON.parse(veiculosJSON);
        console.log("Dados após parse:", veiculos);

        if (Array.isArray(veiculos)) {

            veiculos.forEach((formData, index) => {
                const formId = formData.id;
                console.log("ID do veiculo:", formId);

                const row = document.createElement("tr");
                row.style.height = "65px";
                row.id = "row-" + formId;

                // Coluna ID
                const idCell = document.createElement("td");
                idCell.classList.add("u-table-cell");
                idCell.textContent = formId;
                row.appendChild(idCell);

                // Coluna Placa
                const placaCell = document.createElement("td");
                placaCell.classList.add("u-table-cell");
                placaCell.textContent = formData.placa;
                row.appendChild(placaCell);

                // Coluna Marca
                const marcaCell = document.createElement("td");
                marcaCell.classList.add("u-table-cell");
                marcaCell.textContent = formData.marca;
                row.appendChild(marcaCell);

                // Coluna Modelo
                const modeloCell = document.createElement("td");
                modeloCell.classList.add("u-table-cell");
                modeloCell.textContent = formData.modelo;
                row.appendChild(modeloCell);

                // Coluna Cor
                const corCell = document.createElement("td");
                corCell.classList.add("u-table-cell");
                corCell.textContent = formData.cor;
                row.appendChild(corCell);

                // Coluna Editar
                const editCell = document.createElement("td");
                editCell.classList.add("u-table-cell");
                const editButton = document.createElement("button");
                editButton.classList.add("botaoEditar");
                editButton.setAttribute("id", "botaoEditar");
                editButton.textContent = "View";
                editButton.addEventListener("click", function() {
                    window.location.href = "cadastroVeiculo.html?id=" + formId;
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
                    if (confirm("Deseja confirmar a exclusão do Cadastro Veículo com ID: " + formId + "?")) {
                        const updatedVeiculos = veiculos.filter(v => v.id !== formId);
                        localStorage.setItem("Veiculos", JSON.stringify(updatedVeiculos));

                        tableBody.removeChild(row);

                        alert("Cadastro Veículo com ID: " + formId + " excluído com sucesso.");
                    }
                });
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            });
        } 
    }
});