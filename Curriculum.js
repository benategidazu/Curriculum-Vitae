let imprimir = document.getElementById('imprimir');

imprimir.addEventListener('click',fImprimir);

function fImprimir(){
    window.print()
}

function myFunction (param) {
    var a = document.getElementById(param);
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = 'none';
    }
}
