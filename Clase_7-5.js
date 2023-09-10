const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento=$form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Este campo debe tener al menos un carácter';
    }
    if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 carácteres';
    }
    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length==0){
        return 'Este campo no puede estar vacío';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length==0){
        return 'Este campo no puede estar vacio';
    }
    if(descripcionRegalo.length<5 || descripcionRegalo.length>100){
        return 'La descripcion debe ser mayor o igual a 5 caracteres y menor a 100 caracteres.';
    }
    return '';
}