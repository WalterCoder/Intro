const secondPart = document.querySelector('.secondPart');
const buttonArea = document.querySelector('.button-area');

// Función para mostrar la segunda parte y el botón de manera atractiva
function mostrarElementosConEstilo() {
    // Agrega la clase 'show' después de 2.5 segundos (2500 milisegundos)
    setTimeout(() => {
        secondPart.classList.add('show');
        buttonArea.classList.add('show');
    }, 2000);
}

// Llama a la función para mostrar los elementos
mostrarElementosConEstilo();


//PRELOADER

let loader = document.getElementById('preloader')

window.addEventListener("load", function(){
    loader.style.display = "none"


})
