const btnMobile = document.getElementById('Menu--Mobile') ;

function toggleMenu(){
    const nav = document.getElementById('Inicio--Menu') ;
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click' , toggleMenu);