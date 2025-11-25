const botaoCardapio = document.querySelector('#btnCardapio');
const titulo = document.querySelector('h1');

botaoCardapio.onclick = function() {
    titulo.innerHTML = "Cardápio Aberto";
    titulo.style.color = "var(--cor-acai)";
};

const campo = document.querySelector('#nomeUsuario');
const mensagem = document.querySelector('#mensagem');

campo.oninput = function() {
    mensagem.innerHTML = "Seja bem-vindo, " + campo.value + "!";
};

const ImagemDestaque = document.querySelector('#FotoDestaque');

ImagemDestaque.onmouseover = function() {
    ImagemDestaque.style.opacity = "0.6";
};

ImagemDestaque.onmouseout = function() {
    ImagemDestaque.style.opacity = "1";
};
