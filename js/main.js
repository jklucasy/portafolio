let calendar=document.querySelector('#calendar');
let img=document.querySelector('#img');
let items=document.querySelector('#items');
let portfolio=document.querySelector('#portfolio');
let img2=document.querySelector('#img2');
let items2=document.querySelector('#items2');

calendar.addEventListener('click', mostrarCalendar);
portfolio.addEventListener('click', mostrarPortfolio);

function mostrarCalendar(){
    img.classList.toggle('visible');
    items.classList.toggle('activo');
    img2.classList.remove('visible');
    items2.classList.remove('activo');
    portfolio.classList.toggle('position');
}
function mostrarPortfolio(){
    img2.classList.toggle('visible');
    items2.classList.toggle('activo');
    img.classList.remove('visible');
    items.classList.remove('activo');
    portfolio.classList.remove('position');
}