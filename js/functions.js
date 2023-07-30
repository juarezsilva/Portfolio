// Sessão Header

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';    
}

// Sessão Projetos

//Navegação por guia botões de rolagem horizontal

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IncoVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    //console.log("1.", scrollLeftValue);

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    //console.log("2.", scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    //IncoVisibility();
    setTimeout(() => IncoVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    //IncoVisibility();
    setTimeout(() => IncoVisibility(), 50);
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

//Javascript para tornar a navegação da guia arrastável  

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IncoVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", ()=> {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

//Javascript para visualizar o conteúdo da guia nos botões da guia de clique

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtns) => {
        tabBtns.classList.remove("active");
    });

    tabs.forEach((tabs) => {
        tabs.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtns, i) => {
    tabBtns.addEventListener("click", () => {
        tab_Nav(i);
    });
});

//Sessão Habilidades

const servicosItens = document.querySelector('.itens-servicos');
const popup = document.querySelector('.popup-box');
const popupCloseIcon = popup.querySelector('.popup-close-icon');

servicosItens.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() == 'button'){
        const item = event.target.parentElement;
        const h2 = item.querySelector('h2').innerHTML;
        const maisConteudo = item.querySelector('.mais-conteudo').innerHTML;
        popup.querySelector('h2').innerHTML = h2;
        popup.querySelector('.popup-body').innerHTML = maisConteudo;
        popupBox();
    }
})

popupCloseIcon.addEventListener('click', popupBox);

popup.addEventListener('click', function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle('open');
}

//Sessão Contato

$(function(){

    //Plugin Mask
    $('input[name=Telefone]').mask('(99)99999-9999');
    //$('input[name=CPF]').mask('999.999.999-99');  

});

// Sessão Scroll no tela rolamento

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth"});
  }
  
  document.querySelector("#btn1").addEventListener("click", function(event) {
    event.preventDefault();
  
    scrollTo("#inicio")   
  })
  
  document.querySelector("#btn2").addEventListener("click", function(event) {
    event.preventDefault();
  
    scrollTo("#sobre-mim")   
  })
  
  document.querySelector("#btn3").addEventListener("click", function(event) {
    event.preventDefault();
  
    scrollTo("#projetos")   
  })
  
  document.querySelector("#btn4").addEventListener("click", function(event) {
    event.preventDefault();
  
    scrollTo("#habilidades")   
  })
  
  document.querySelector("#btn5").addEventListener("click", function(event) {
    event.preventDefault();
  
    scrollTo("#contato")   
  })



