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
    const form = document.getElementById('form');
    const title = document.getElementById('title');
    const login = document.getElementById('form');
    
    const themeSystem = localStorage.getItem('themeSystem') || 'light';

    if (themeSystem === 'dark') {
        mode.classList.remove('light-theme');
        mode.classList.add('dark-theme');
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');

        body.classList.add('dark');
        form.classList.add('login-box-dark');
        title.classList.add('title-dark');
        login.classList.add('login-box-dark');
        
    } else {
        mode.classList.add('light-theme');
        mode.classList.remove('dark-theme');
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        body.classList.remove('dark');
        form.classList.remove('login-box-dark');
        title.classList.remove('title-dark');
        login.classList.remove('login-box-dark');
        
    }

    mode.addEventListener('click', () => {
        if (mode.classList.contains('light-theme')) {
            mode.classList.remove('light-theme');
            mode.classList.add('dark-theme');
            mode.classList.add('fa-sun');
            mode.classList.remove('fa-moon');

            body.classList.add('dark');
            form.classList.add('login-box-dark');
            title.classList.add('title-dark');
            login.classList.add('login-box-dark');
            

            localStorage.setItem('themeSystem', 'dark');
        } else {
            mode.classList.add('light-theme');
            mode.classList.remove('dark-theme');
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon');

            body.classList.remove('dark');
            form.classList.remove('login-box-dark');
            title.classList.remove('title-dark');
            login.classList.remove('login-box-dark');
            

            localStorage.setItem('themeSystem', 'light');
        }
    });
});