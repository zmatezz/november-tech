const iconMenu = document.querySelector('#i-menu');
const iconClose = document.querySelector('#i-close');
const navMobile = document.querySelector('#nav-mobile');
const imgFooter = document.querySelector('#img-footer');


const obterEstilo = (elemento) => {
    const style = window.getComputedStyle(elemento);
    return style;
}

const alterarIcone = (iconeVisivel, iconeOculto) => {

    if(obterEstilo(iconeVisivel).display == 'flex') {
        iconeVisivel.style.display = "none";
        iconeOculto.style.display = "flex";
    } 
}

const estadoNavMobile = (estado) => {
    if(obterEstilo(navMobile).display == 'none' && estado == true) {
        navMobile.style.display = 'flex'; 
        imgFooter.style.display = 'none';
    } else {
        navMobile.style.display = 'none';
        imgFooter.style.display = 'inline'

    }
}

iconMenu.onclick = function () {
    alterarIcone(iconMenu, iconClose);
    estadoNavMobile(true);
}

iconClose.onclick = function () {
    alterarIcone(iconClose, iconMenu);
    estadoNavMobile(false);
}

window.onresize = function() {
    if(window.innerWidth >= 1024) {
        alterarIcone(iconClose, iconMenu);
        estadoNavMobile(false);    
    }
}