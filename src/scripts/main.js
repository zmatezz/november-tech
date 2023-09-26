const iconMenu = document.querySelector("#i-menu");
const iconClose = document.querySelector("#i-close");
const navMobile = document.querySelector("#nav-mobile");
const imgFooter = document.querySelector("#img-footer");

const obterEstilo = (elemento) => {
    const style = window.getComputedStyle(elemento);
    return style;
};

const alterarIcone = (iconeVisivel, iconeOculto) => {
    if (obterEstilo(iconeVisivel).display == "flex") {
        iconeVisivel.style.display = "none";
        iconeOculto.style.display = "flex";
    }
};

const estadoNavMobile = (estado) => {
    if (obterEstilo(navMobile).display == "none" && estado == true) {
        navMobile.style.display = "flex";
        imgFooter.style.display = "none";
    } else {
        navMobile.style.display = "none";
        imgFooter.style.display = "inline";
    }
};

iconMenu.onclick = function () {
    alterarIcone(iconMenu, iconClose);
    estadoNavMobile(true);
};

iconClose.onclick = function () {
    alterarIcone(iconClose, iconMenu);
    estadoNavMobile(false);
};

window.onresize = function () {
    if (window.innerWidth >= 1024) {
        alterarIcone(iconClose, iconMenu);
        estadoNavMobile(false);
    }
};







/* Matheus */
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.querySelector(".back-to-top");

    backToTopButton.addEventListener("click", function(e) {
        e.preventDefault();
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        const scrollDuration = 500;
        const scrollStep = -window.scrollY / (scrollDuration / 15); 

        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
});