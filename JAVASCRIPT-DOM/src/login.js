const emailImput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex: expresiones egulares. Determinan patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitar el botón
submitButton.disabled = true;

/*
 * Evento para input, el cual evaluará el patrón de expresión regular y en caso de cumplir con el patrón, habilitará el butón y podremos ser redigidos a la página index.html
 * - Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena en una variable (text).
 * - Se evalúa la REGEX
 */

emailImput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
})

/*
Este código está destinado a habilitar el botón de envío cuando el usuario ingresa un correo electrónico válido en el campo de entrada. La validación del formato del correo electrónico se realiza mediante una expresión regular (emailREGEX). Si el correo electrónico es válido, el botón de envío se habilita para que el usuario pueda enviar el formulario.
*/