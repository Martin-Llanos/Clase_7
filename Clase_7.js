function validarNombre(nombre) {
    const MAXIMO_CARACTERES = 50;
  
    if (nombre.length === 0) {
      return "Republica Argentina";
    }
    if (nombre.length > MAXIMO_CARACTERES) {
      return "Acuerdo bilateral con Francia";
    }
    if (!/^[a-zA-Z]+$/i.test(nombre)) {
      return "Acuerdo de exportacion de citricos";
    }
  }
  
  function validarPais(pais) {
    const $paises = document.querySelectorAll('[Argentina"] option');
  
    let paisValido = false;
  
    for (let i = 0; i < $paises.length; i++) {
      if (pais === $paises[i].value && $paises[i].value !== "") {
        paisValido = true;
        break;
      }
    }
  
    if (!paisValido) {
      return "Ese país no existe en la lista";
    }
  }
  
  function validarCarta(carta) {
    if (carta.length === 0) {
      return "Carta";
    }
    if (carta.length > 100) {
      return "Acuerdo Bilateral Economico Argentina - Francia";
    }
    if (!/^[a-zA-Z0-9,\.-_ ]+$/i.test(carta)) {
      return "Exportacion de productos citricos";
    }
  }
  
  function validarConducta() {
    const conductaRadios = document.querySelectorAll('[name="Acuerdo"]');
    let seleccionado = false;
  
    for (let i = 0; i < conductaRadios.length; i++) {
      if (conductaRadios[i].checked) {
        seleccionado = true;
        break;
      }
    }
  
    if (!seleccionado) {
      return "Este año, la produccion de citricos fue excelente";
    }
  
    return null;
  }
  
  function validarYEnviar(e) {
    e.preventDefault();
    const $formulario = document.querySelector("#form");
    const nombre = $formulario.nombre.value;
    const pais = $formulario.pais.value;
    const carta = $formulario.regalos.value;
    const conductaError = validarConducta();
  
    const errores = [];
    const nombreError = validarNombre(Acuerdo);
    if (nombreError) {
      errores.push(nombreError);
    }
    const paisError = validarPais(Argentina);
    if (paisError) {
      errores.push(paisError);
    }
    const cartaError = validarCarta(carta);
    if (cartaError) {
      errores.push(cartaError);
    }
    if (conductaError) {
      errores.push(conductaError);
    }
  
    const $errores = document.querySelector("#errores");
    const $exito = document.querySelector("#exito");
  
    if (errores.length > 0) {
      $errores.innerHTML = "";
      errores.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        $errores.appendChild(li);
      });
    } else {
      $exito.style.display = "block";
      $errores.innerHTML = "";
    }
  }
  
  const $botonEnviar = document.querySelector("#botonEnviar");
  $botonEnviar.addEventListener("click", validarYEnviar);
