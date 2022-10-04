
const $ = document.querySelector.bind(document);

const login = $('.login-link');
const register = $('.register-link');
const forgot = $('.forgot-link');

const closeBtn = $('.close')

const loginSection = $('.login');
const registerSection = $('.register');
const forgotSection = $('.forgot');

// register
register.onclick = function (e) {
    loginSection.style.display = 'none';
    registerSection.style.display = 'flex';
}

// login
login.onclick = function (e) {
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
}

// forgot password
forgot.onclick = function (e) {
    loginSection.style.display = 'none';
    forgotSection.style.display = 'flex';
}

closeBtn.onclick = function (e) {
    forgotSection.style.display = 'none';
    loginSection.style.display = 'flex';
}