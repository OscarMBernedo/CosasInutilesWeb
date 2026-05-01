
function aplicarModoOscuro(activo) {
    const elementos = [document.body, document.querySelector("header"), document.querySelector("footer")];
    
    for (let i = 0; i < elementos.length; i++) {
        const el = elementos[i];
        if(el)
            el.classList.toggle("dark-mode", activo);
    }
}

function alternarModoOscuro() {
    const estaOscuro = document.body.classList.contains("dark-mode");
    const nuevoEstado = !estaOscuro;
    aplicarModoOscuro(nuevoEstado);
    localStorage.setItem("darkMode", nuevoEstado);
}

function configurarBotonModoOscuro() {
    const boton = document.getElementById("toggleDarkMode");
    if(boton)
        boton.addEventListener("click", alternarModoOscuro);
}

function aplicarConfiguracionInicial() {
    const estadoGuardado = localStorage.getItem("darkMode") === "true";
    aplicarModoOscuro(estadoGuardado);
}

//Para despues del onload
function inicializarModoOscuro() {
    aplicarConfiguracionInicial();
    configurarBotonModoOscuro();
}
