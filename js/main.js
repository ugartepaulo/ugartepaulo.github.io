
//Funciones respecto a los botones
function mostrarGif(){
    document.getElementById('gif').style.display = 'flex';
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('boton-gif').style.backgroundColor = '#124471';
    document.getElementById('boton-gif').style.color = 'white';
    document.getElementById('boton-galeria').style.backgroundColor = '#f0f0f0';
    document.getElementById('boton-galeria').style.color = 'black';
}
function mostrarGaleria(){
    document.getElementById('galeria').style.display = 'flex';
    document.getElementById('gif').style.display = 'none';
    document.getElementById('boton-galeria').style.backgroundColor = '#124471';
    document.getElementById('boton-galeria').style.color = 'white';
    document.getElementById('boton-gif').style.backgroundColor = '#f0f0f0';
    document.getElementById('boton-gif').style.color = 'black';
}