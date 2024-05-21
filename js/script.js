window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Selecciona el checkbox
var checkbox = document.getElementById('check');

// Selecciona el ul que contiene los elementos del nav
var navList = document.querySelector('.nav');

// Añade un event listener para el evento 'change' del checkbox
checkbox.addEventListener('change', function() {
    // Si el checkbox está marcado (checked)
    if (checkbox.checked) {
        // Agrega la clase 'show' al ul para mostrarlo
        navList.classList.add('show');
    } else {
        // Si el checkbox no está marcado, elimina la clase 'show' del ul para ocultarlo
        navList.classList.remove('show');
    }
});
