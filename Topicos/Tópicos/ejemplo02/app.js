document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const userNameInput = document.getElementById('userName');
  const passInput = document.getElementById('pass');
  const signInButton = document.querySelector('.boton button');
  const message = document.createElement('p');

  form.appendChild(message);

  signInButton.addEventListener('click', function (event) {
    event.preventDefault();

    const userName = userNameInput.value;
    const password = passInput.value;

    message.textContent = '';

    if (!userName || !password) {
      message.textContent = 'Introduzca nombre de usuario y contraseña.';
    } else if (password.length < 5) {
      message.textContent = 'Contraseña incorrecta. Debe tener al menos 5 caracteres.';
    } else {
      message.textContent = 'Contraseña correcta.';
    }
  });
});