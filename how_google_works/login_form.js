const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector("a");

function LoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove("hidden");
}

function hrefGo(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("click", LoginSubmit);
link.addEventListener("click", hrefGo);
