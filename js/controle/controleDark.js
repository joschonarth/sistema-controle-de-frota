/* Mudar Ícone da Página */

function alternarTema() {
    var themeSystem = localStorage.getItem('themeSystem');

    if (themeSystem === 'dark') {
        localStorage.setItem('themeSystem', 'light');
    } else {
        localStorage.setItem('themeSystem', 'dark');
    }
    alterarIconeModo();
}

function alterarIconeModo() {
    var favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'icon');
        document.head.appendChild(favicon);
    }

    var themeSystem = localStorage.getItem('themeSystem');

    if (themeSystem === 'dark') {
        favicon.href = 'img/icone-dark.png';
    } else {
        favicon.href = 'img/icone-light.png';
    }
}

document.getElementById('mode_icon').addEventListener('click', function() {
    alternarTema();
});

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('themeSystem')) {
        localStorage.setItem('themeSystem', 'light');
    }
    alterarIconeModo();
});

/* Dark Mode */

document.addEventListener('DOMContentLoaded', () => {
    const mode = document.getElementById('mode_icon');
    const body = document.querySelector('body');
    const table = document.querySelector('table');
    const title = document.querySelector('h2');
    const botaoInserir = document.getElementById('botaoInserir');
    const botaoConcluir = document.getElementById('botaoConcluir');
    const botaoEditar = document.querySelectorAll('.botaoEditar');
    const botaoExcluir = document.querySelectorAll('.botaoExcluir');

    const themeSystem = localStorage.getItem('themeSystem') || 'light';

    function applyTheme(theme) {
        if (theme === 'dark') {
            mode.classList.remove('light-theme');
            mode.classList.add('dark-theme');
            mode.classList.add('fa-sun');
            mode.classList.remove('fa-moon');

            body.classList.add('dark');
            table.classList.add('dark-table');
            title.classList.add('dark-title');
            botaoInserir.classList.add('dark-button');
            botaoConcluir.classList.add('dark-button');
            botaoEditar.forEach(botao => {
                botao.classList.add('dark-button-editar');
            });
            botaoExcluir.forEach(botao => {
                botao.classList.add('dark-button-excluir');
            });

      
        } else {
            mode.classList.add('light-theme');
            mode.classList.remove('dark-theme');
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon');

            body.classList.remove('dark');
            table.classList.remove('dark-table');
            title.classList.remove('dark-title');
            botaoInserir.classList.remove('dark-button');
            botaoConcluir.classList.remove('dark-button');
            botaoEditar.forEach(botao => {
                botao.classList.remove('dark-button-editar');
            });
            botaoExcluir.forEach(botao => {
                botao.classList.remove('dark-button-excluir');
            });
        }
    }

    applyTheme(themeSystem);

    mode.addEventListener('click', () => {
        const newTheme = (mode.classList.contains('light-theme')) ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('themeSystem', newTheme);
    });
});