function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un carácter',
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            '2342342342343141edsdfsdfsdfsdf2f23r23423423423f2r3fr23r234r234234234fefsdf') ===
        'Este campo debe tener menos de 50 carácteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacío',
        'Validar ciudad no valido que el campo estuviera vacio',
    );
}

function probarvalidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'Este campo no puede estar vacio',
        'Validar descripcion regalo no valido si estuviera vacio',
    );

    console.assert(validarDescripcionRegalo('asdf')==='La descripcion debe ser mayor o igual a 5 caracteres y menor a 100 caracteres.',
        'Validar descripcion regalo no valido que sea menor a 5 caracteres y mayor a 100.');
}
probarValidarNombre();
probarValidarCiudad();
probarvalidarDescripcionRegalo();