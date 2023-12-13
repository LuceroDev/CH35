// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad = 18;
if (edad >= 18) {
console.log("Puedes votar");
} else {
    console.log("Espera que seas mayor de edad para votar")
}
/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let x = 65;
if (x%7 == 0 && x%8 == 0) {
    console.log(true);
} else{
    console.log(false)
}
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
let n =65;
if (n%4 == 0 || n%9 == 0) {
    console.log(true);
} else{
    console.log(false)
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let categoria = "accion"
switch (categoria) {
    case "accion" :
        console.log("Rápido y furioso");
        break;
    case "drama" :
        console.log("Amores perros");
        break;
    case "comedia" :
            console.log("¿Qué Culpa Tiene el Niño?");
            break;
    case "romance" :
        console.log("Yo Antes de Ti");
        break;
    case "suspenso" :
        console.log("Kilómetro 31");
        break;
    case "terror" :
        console.log("La noche del demonio");
        break;
        default :
        console.log("Categoría desconocida");
        break;

}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroATM(opcion) {
    opcion = parseInt(prompt("Ingrese una opcion: "));
    if (opcion == 1) {
        return "Retirar dinero";
    } else if (opcion == 2) {
        return "Transferencia";
    } else if (opcion == 3) {
        return "Deposito";
    } else if (opcion == 4) {
        return "Pago de servicios";
    } else {
        return "Opcion incorrecta";
    }
}

console.log(cajeroATM());

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function convertirDivisas(opcion) {
    let opcion = prompt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            return "A dolar estadounidense";
        case 2:
            return "A euros";
        case 3:
            return "A yen japones";
        case 4:
            return "A libre esterlina";
        case 5:
            return "A franco suizo";
        default:
            return "Opcion incorrecta";
    }
}

console.log(convertirDivisas(opcion));