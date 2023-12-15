/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/

// Define el array temperaturasCelsius con las temperaturas diarias en grados Celsius.
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

// Declara la función celsiusToFahrenheit que convierte una temperatura de Celsius a Fahrenheit según la fórmula dada.
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}

// Array temperaturasCelsius y mostrar cada temperatura con su equivalente en Fahrenheit
for (let temperaturaCelsius of temperaturasCelsius) {
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius); /* Esta liena indica que el resultado de llamar a la función celsiusToFahrenheit con el valor de temperaturaCelsius se asigna a la constante temperaturaFahrenheit. Después de esta línea, temperaturaFahrenheit contendrá la temperatura convertida a grados Fahrenheit. */
    console.log(`${temperaturaCelsius}°C - ${temperaturaFahrenheit}°F`);
  }
  



/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
// variable suma
let suma = 0;

// sumar los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  suma += i;
}

// resultado de la suma en la consola
console.log("La suma de los primeros 10 números naturales es:", suma);


/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

// Función para verificar si un número es primo
function esPrimo(numero) {
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) return false;

  // Verificar si el número es divisible por algún valor en el rango de 2 a (n-1)
  for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
  }

  // Si no se encontraron divisores, el número es primo
  return true;
}

// Solicitar al usuario que ingrese un número
let numero = prompt("Ingrese un número entero positivo:");

// Convertir la entrada a un número entero
numero = parseInt(numero);

// Mostrar el resultado
if (esPrimo(numero)) {
  console.log("El número es primo.");
} else {
  console.log("El número no es primo.");
}




/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/
// Función para generar los primeros n términos de la secuencia de Fibonacci
function fibonacci(n) {
  let secuencia = [0, 1];

  for (let i = 2; i < n; i++) {
      secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }

  return secuencia;
}

// Número de términos a generar
const n = 10;

// Obtener la secuencia de Fibonacci de los primeros n términos
const resultado = fibonacci(n);

// Mostrar el resultado
console.log(`Los primeros ${n} términos de la secuencia de Fibonacci son: ${resultado.join(', ')}`);



  