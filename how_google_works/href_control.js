const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector("a");

function LoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function hrefGo(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("click", LoginSubmit);
link.addEventListener("click", hrefGo);
