document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("tableBody");

    const motoristasJSON = localStorage.getItem("Motoristas");
    console.log("Dados no Local Storage:", motoristasJSON);

    if (motoristasJSON) {
        const motoristas = JSON.parse(motoristasJSON);
        console.log("Dados após parse:", motoristas);

        if (Array.isArray(motoristas)) {
            motoristas.forEach((formData, index) => {
                const formId = formData.id;
                console.log("ID do motorista:", formId);

                const row = document.createElement("tr");
                row.style.height = "65px";
                row.id = "row-" + formId;

                // Coluna ID
                const idCell = document.createElement("td");
                idCell.classList.add("u-table-cell");
                idCell.textContent = formId;
                row.appendChild(idCell);

                // Coluna Nome
                const nomeCell = document.createElement("td");
                nomeCell.classList.add("u-table-cell");
                nomeCell.textContent = formData.nome;
                row.appendChild(nomeCell);

                // Coluna Email
                const emailCell = document.createElement("td");
                emailCell.classList.add("u-table-cell");
                emailCell.textContent = formData.email;
                row.appendChild(emailCell);

                // Coluna RG
                const rgCell = document.createElement("td");
                rgCell.classList.add("u-table-cell");
                rgCell.textContent = formData.rg;
                row.appendChild(rgCell);

                // Coluna CPF
                const cpfCell = document.createElement("td");
                cpfCell.classList.add("u-table-cell");
                cpfCell.textContent = formData.cpf;
                row.appendChild(cpfCell);

                // Coluna Editar
                const editCell = document.createElement("td");
                editCell.classList.add("u-table-cell");
                const editButton = document.createElement("button");
                editButton.classList.add("botaoEditar");
                editButton.setAttribute("id", "botaoEditar");
                editButton.textContent = "View";
                editButton.addEventListener("click", function() {
                    window.location.href = "cadastroMotorista.html?id=" + formId;
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
                    if (confirm("Deseja confirmar a exclusão do Cadastro Motorista com ID: " + formId + "?")) {
                        const updatedMotoristas = motoristas.filter(v => v.id !== formId);
                        localStorage.setItem("Motoristas", JSON.stringify(updatedMotoristas));

                        tableBody.removeChild(row);

                        alert("Cadastro Motorista com ID: " + formId + " excluído com sucesso.");
                    }
                });
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            });
        } 
    }
});