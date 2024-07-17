document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.getElementById("loginLink");
    if (loginLink) {
        loginLink.addEventListener("click", validateLogin);
    }
});

function validateLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() !== "" && password.trim() !== "") {

        var successMessage = document.createElement("div");
        successMessage.className = "successMessage";
        successMessage.innerHTML = "Entrando...";
        
        var form = document.getElementById("loginForm");
        form.appendChild(successMessage);

        setTimeout(function() {
            window.location.href = "relatorio.html";
        }, 2000);


    } else {

        var errorMessage = document.createElement("div");
        errorMessage.className = "errorMessage";
        errorMessage.innerHTML = "Os campos usuário e senha são obrigatórios.";
        
        var form = document.getElementById("loginForm");
        form.appendChild(errorMessage);

        setTimeout(function() {
            form.removeChild(errorMessage);
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }, 3000);

    }
}
