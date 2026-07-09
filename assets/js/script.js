
function pintar(elemento, color = 'black') {
  elemento.style.backgroundColor = color;
  elemento.style.color = 'green';
  <p>Ejercicio 1 - Funcion de Pintar</p>
}

const elemento = document.getElementById('elemento1');
elemento.addEventListener('click', function () {
  pintar(elemento, 'yellow');
});
