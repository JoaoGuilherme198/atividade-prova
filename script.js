document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Login bem-sucedido!');
            window.location.href = 'index2.html'
        }
    });
});