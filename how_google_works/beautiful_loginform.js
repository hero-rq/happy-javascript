const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector("a");
const USERNAME_KEY = "username";

function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function hrefGo(event) {
    event.preventDefault();
    console.dir(event);
}

link.addEventListener("click", hrefGo);

function paintGreeting(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove("hidden");
}

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if (SavedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreeting(SavedUsername);
}
