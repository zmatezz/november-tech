const iconMenu = document.querySelector("#i-menu");
const iconClose = document.querySelector("#i-close");
const backToTopButton = document.querySelector(".back-to-top");
const navMobile = document.querySelector("#nav-mobile");
const linksNav = document.querySelectorAll(".scroll-link");

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
  } else {
    navMobile.style.display = "none";
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

linksNav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alterarIcone(iconClose, iconMenu);
    estadoNavMobile(false);

    const targetId = link.getAttribute("href").substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      if (targetSection.id == "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      const targetOffset = targetSection.offsetTop - 50;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  });
});

window.onresize = function () {
    if (window.innerWidth >= 1024) {
        alterarIcone(iconClose, iconMenu);
        estadoNavMobile(false);
    }
};







/* Matheus */
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.querySelector(".back-to-top");

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToTop();
  });

  function smoothScrollToTop() {
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  submitButton.addEventListener("click", async function () {
    const form = document.querySelector(".form");
    if (!form.checkValidity()) {
      return;
    }

    const nome = document.querySelector('input[name="Nome"]').value;
    const telefone = document.querySelector('input[name="Telefone"]').value;
    const data = document.querySelector('input[name="Data"]').value;

    gif.style.visibility = "visible";

    try {
      const response = await axios.post(
        "https://api.sheetmonkey.io/form/fTYFcmDnwrRnajeJTcPMnh",
        {
          Nome: nome,
          Telefone: telefone,
          Data: data,
        }
      );

      console.log("Resposta da API:", response.data);

      setTimeout(function () {
        gif.style.visibility = "hidden";
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  });
});

$(function () {
  $("#datepicker").datepicker({
    minDate: 0,
  });
});
