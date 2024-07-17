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
    const main = document.querySelector('main');
    const botaoPesquisar = document.getElementById('botaoPesquisar');
    const botaoAlterar = document.getElementById('botaoAlterar');
    const botaoExcluir = document.getElementById('botaoExcluir');
    const botaoSubmit = document.getElementById('relatorioLink');
    const border = document.getElementById('bordered-section');
    const formElements = document.querySelectorAll('.form-group');

    const themeSystem = localStorage.getItem('themeSystem') || 'light';

    if (themeSystem === 'dark') {
        mode.classList.remove('light-theme');
        mode.classList.add('dark-theme');
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');

        body.classList.add('dark');
        main.classList.add('main-dark');
        botaoPesquisar.classList.add('dark-button');
        botaoAlterar.classList.add('dark-button');
        botaoExcluir.classList.add('dark-button');
        botaoSubmit.classList.add('dark-button');
        border.classList.add('bordered-section-dark');
        formElements.forEach(element => {
            element.classList.add('form-group-dark');
        });
        
    } else {
        mode.classList.add('light-theme');
        mode.classList.remove('dark-theme');
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        body.classList.remove('dark');
        main.classList.remove('main-dark');
        botaoPesquisar.classList.remove('dark-button');
        botaoAlterar.classList.remove('dark-button');
        botaoExcluir.classList.remove('dark-button');
        botaoSubmit.classList.remove('dark-button');
        border.classList.remove('bordered-section-dark');
        formElements.forEach(element => {
            element.classList.remove('form-group-dark');
        });
    }

    mode.addEventListener('click', () => {
        if (mode.classList.contains('light-theme')) {
            mode.classList.remove('light-theme');
            mode.classList.add('dark-theme');
            mode.classList.add('fa-sun');
            mode.classList.remove('fa-moon');

            body.classList.add('dark');
            main.classList.add('main-dark');
            botaoPesquisar.classList.add('dark-button');
            botaoAlterar.classList.add('dark-button');
            botaoExcluir.classList.add('dark-button');
            botaoSubmit.classList.add('dark-button');
            border.classList.add('bordered-section-dark');
            formElements.forEach(element => {
                element.classList.add('form-group-dark');
            });

            localStorage.setItem('themeSystem', 'dark');
            
        } else {
            mode.classList.add('light-theme');
            mode.classList.remove('dark-theme');
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon');

            body.classList.remove('dark');
            main.classList.remove('main-dark');
            botaoPesquisar.classList.remove('dark-button');
            botaoAlterar.classList.remove('dark-button');
            botaoExcluir.classList.remove('dark-button');
            botaoSubmit.classList.remove('dark-button');
            border.classList.remove('bordered-section-dark');
            formElements.forEach(element => {
                element.classList.remove('form-group-dark');
            });

            localStorage.setItem('themeSystem', 'light');
        }
    });
});