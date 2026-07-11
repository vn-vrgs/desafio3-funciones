
function pintar( color ){ 
  elemento.style.backgroundColor = 'yellow',
  elemento.style.color = 'black'
} 

// Restablece el color original
function restablecer(elemento) {
    elemento.style.backgroundColor = "";
    elemento.style.color = "";
}

// const elemento = document.getElementById("elemento1") 
let elemento = document.querySelector("#elemento1");
elemento.addEventListener("click", pintar); 

btnRestablecer.addEventListener("click", function () {
    restablecer(elemento);
});
