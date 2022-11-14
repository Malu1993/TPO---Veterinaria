addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.boton')
    if(boton){
        boton.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
})
