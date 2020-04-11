var navFixa = document.querySelector('#nav-fixa'); // Elemento Nav
var headerElement = document.querySelector('header'); // Elemento Header

/*
 * Detecta a rolagem do scroll para performar algumas acoes,
 * como mostrar ou nao a nav fixa
*/
window.addEventListener("scroll", function() { 
    if (window.scrollY < (window.innerHeight * 0.8)) {
        navFixa.style.display = "none";
    } else {
        navFixa.style.display = "flex";
        var botao = [
            document.querySelector("#botao-1"), 
            document.querySelector("#botao-2")
        ];
        if (window.scrollY < (window.innerHeight * 2) - 200) {
            botao[0].classList.add('active');
            botao[1].classList.remove('active');
        } else {
            botao[1].classList.add('active');
            botao[0].classList.remove('active');
        } 
    }
});

/*
 * Funcao responsavel por realizar a animacao de rolagem
 * da pagina ao ser pressionado algum botao
*/
function rolaPagina (secao) {
    $('html, body').animate({
        scrollTop: headerElement.offsetHeight * secao
    }, 800);
}
