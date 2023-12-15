//Ejercicio 1: Un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro.

// Solicitar dos números
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

// Verificar si los números son iguales o si alguno es mayor que el otro
if (numero1 === numero2) { //Si numero1 es igual a numero2, se imprime en la consola el mensaje "Los números son iguales.
    console.log("Los números son iguales.");
} else if (numero1 > numero2) { //Si la condición del primer if no se cumple, se pasa a esta línea. Aquí se verifica si numero1 es mayor que numero2. 
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El segundo número es mayor que el primero.");
}


//Ejercicio 2: un programa que pida al usuarios dos palabras y determine si son iguales o no


// Solicitar dos palabras
let frase1 = prompt("Ingrese la primera palabra:");
let frase2 = prompt("Ingrese la segunda palabra:");

// Verificar si las palabras son iguales o diferentes
if (frase1 === frase2) {
    console.log("Las palabras son iguales.");
} else {
    console.log("Las palabras son diferentes.");
}

