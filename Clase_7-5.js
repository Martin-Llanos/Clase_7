const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento=$form.comportamiento.value;
const descripcionRegalo = $form['Auto acontrol remoto'].value;

function validarNombre(Andres){
    if (nombre.length === 0){
        return 'Hola Santa, mi nobre es Andres';
    }
    if (nombre.length >= 50){
        return 'Este años me porte bien';
    }
    return '';
}

function validarCiudad(Rosario){
    if(ciudad.length==0){
        return 'Soy de la ciudad de Rosario';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length==0){
        return 'Quiero un auto a control remoto';
    }
    if(descripcionRegalo.length<5 || descripcionRegalo.length>100){
        return 'Es un auto de color rojo que se le abren las puertas y se le pliega el techo';
    }
    return '';
}
