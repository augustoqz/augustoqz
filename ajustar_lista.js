function ajustarAlturaLista(){
    const lista = document.querySelector('.lista');
    const alturaDisponivel = window.innerHeight;

    const altraMaximaLista = Mathfloor(alturaDisponivel * 0.5);

    lista.style.maxHeight = alturaMaximaLista + 'px';
}

window.addEventListener('load', ajustarAlturaLista);
window.addEventListener('resize', ajustarAlturaLista);