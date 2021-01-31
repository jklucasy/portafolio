let calendar=document.querySelector('#calendar');
let img=document.querySelector('#img');
let items=document.querySelector('#items');
let portfolio=document.querySelector('#portfolio');
let items2=document.querySelector('#items2');
let cambio=document.querySelector('#cambio');
let view=document.querySelector('#preview');

function mostrarCalendar() {
    cambio.setAttribute("src", `./img/calendar.png`);
    view.setAttribute("href", `https://jklucasy.github.io/calendario/`);
    if (items.classList.contains('activo')) {
        img.classList.remove('visible');
    } else {
        img.classList.add('visible');
    }
    items.classList.toggle('activo');
    items2.classList.remove('activo');
    portfolio.classList.toggle('position');
}
function mostrarPortfolio() {
    cambio.setAttribute("src", `./img/portfolio.png`);
    // view.setAttribute("href", `https://jklucasy.github.io/`);
    if (items2.classList.contains('activo')) {
            img.classList.remove('visible');
    } else {
        
        img.classList.add('visible');
    }
    items2.classList.toggle('activo');
    items.classList.remove('activo');
    portfolio.classList.remove('position');
}

calendar.addEventListener('click', mostrarCalendar);
portfolio.addEventListener('click', mostrarPortfolio);
