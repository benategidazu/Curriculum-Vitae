let imprimir = document.getElementById('imprimir');

imprimir.addEventListener('click',fImprimir);

function fImprimir(){
    window.print()
}

let mostrar = (i) => {
    i.style.display = 'block';
}
let ocultar = (x) => {
    x.style.display = 'none';
}

function mo (param) {
    let elemento = document.getElementById(param);
    if (window.getComputedStyle(elemento) === 'none') {
        mostrar (elemento);
        return false;
    } else
    mostrar (elemento);
    return true;

}