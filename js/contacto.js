
const formulario = document.getElementById('formulario1');
const inputs = document.querySelectorAll('#formulario1 input');

const expresiones = {
    nombre: /^[a-zA-zÀ-ÿ\s]{1,48}$/,
    apellido: /^[a-zA-zÀ-ÿ\s]{1,48}$/,
    correo:/^[a-zA-Z8-9_.+-]+@[a-zA-Z8-9-]+\.[a-zA-Z8-9-.]+$/,
    telefono:/^\d{7,14}$/,
}

function validarCampo(expresion, input, campo) {
    if(expresion.test(input.value)){
        document.getElementById(`div-${campo}`).classList.remove('labels-incorrecto');
        document.getElementById(` ${campo}`).classList.remove('labels-incorrecto');
        document.getElementById(`div-${campo}`).classList.add('labels');
        document.getElementById(`${campo}`).classList.add('labels');
    }

    else{
        document.getElementById(`div-${campo}`).classList.add('labels-incorrecto');
        document.getElementById(`${campo}`).classList.add('labels-incorrecto');
        document.getElementById(`div-${campo}`).classList.remove('labels');
        document.getElementById(`${campo}`).classList.remove('labels');
    }
}

function validarFormulario (e) {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.usuario, e.target, 'nombre');
        break;

        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;

        case "correo":
            validarCampo(expresiones.apellido, e.target, 'correo');
        break;

        case "telefono":
            validarCampo(expresiones.apellido, e.target, 'telefono');
        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

