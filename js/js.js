var imagenes = ['imagen/img1.jpg', 'imagen/img2.jpg', 'imagen/img3.jpg'],
cont = 0;

function carrousel(cuadro){
cuadro.addEventListener('click', e => {
  var atras = cuadro.querySelector('.atras'),
      adelante = cuadro.querySelector('.adelante'),
      img = cuadro.querySelector('img'),
      tgt = e.target;

if (tgt == atras) {
  if (cont > 0) {
      img.src = imagenes[cont - 1];
      cont--;

}else {
  img.src = imagenes[imagenes.length - 1];
  cont = imagenes.length - 1;

}

} else if (tgt == adelante) {
  if (cont < imagenes.length - 1) {
      img.src = imagenes[cont + 1];
      cont++;

}else {
  img.src = imagenes[0];
  cont = 0;

  }
}

  });
}
document.addEventListener("DOMContentLoaded", () => {
let cuadro = document.querySelector('.cuadro');


  carrousel(cuadro);

});
