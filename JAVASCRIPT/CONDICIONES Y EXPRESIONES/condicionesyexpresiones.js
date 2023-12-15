/*Operador:
Es un signo que especifica que debe efectuar una determinada operación
*/
/*
Operadores aritméticos (+, -, *, /, %, ++, --)
Operadores de asignación (=)

Operadores lógicos (&&, ||, !)

Operadores de comparación (==, ===, <, >, >=, <=)

Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
*/

//OPERADORES ARITMÉTICOS

/*
(+): suma, se utiliza sumar dos numeros
(-): resta, se utiliza para restar un número de otro
(*): multiplicación, se utiliza para multiplicar dos numeros
(/): división, se utiliza para dividir un número entre otro
(%): residuo, nos va a dar lo que sobra de una división y nos ayuda a verificar si un número es par o impar.
(++): incremento, aumenta de uno en uno la cantidad o el número
(--): decremento, disminuye de uno en uno la cantidad o el número.
*/
// Declaración e inicialización de variables
let numero1 = 10;
let numero2 = 5;

// Operaciones
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let residuo = numero1 % numero2;

// Incremento
let incremento = numero1;
incremento++;  // Nota: incremento++ es la forma correcta de escribirlo

// Decremento
let decremento = numero2;
decremento--;  // Nota: decremento-- es la forma correcta de escribirlo

// Mostrar resultados (puedes usar console.log para ver los resultados en la consola)
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multiplicacion);
console.log("Division: " + division);
console.log("Residuo: " + residuo);
console.log("Incremento: " + incremento);
console.log("Decremento: " + decremento);

// Ejemplo de descuento:

let precioReal = 1000;
let porcentajeDescuento = 20;

// Calcular el descuento
let descuento = (porcentajeDescuento / 100) * precioReal;

// Calcular el precio con descuento
let precioConDescuento = precioReal - descuento;

// Mostrar el resultado
console.log(`Precio real: $${precioReal}`);
console.log(`Porcentaje de descuento: ${porcentajeDescuento}%`);
console.log(`Descuento: $${descuento}`);
console.log(`Precio con descuento: $${precioConDescuento}`);


//Otra forma de mostrar el resultado

console.log ("Precio Real:$" + precioReal);
console.log ("Porcentaje de descuento:" + porcentajeDescuento + "%");


/*
Operadores de asignación

=: Este operador no compara, lo que hace es asignar
*/

//Ejeplo:
//let fruta = fresa;

/*
Operadores de comparación

(==): Igualdad compara si nuestros valores son iguales

*/


//Variables a comparar
let a = 5;
let b = 10;

// Operador de igualdad (==)
console.log("¿a es igual a b?", a == b);  // false

// // Operador de desigualdad (!=)
// console.log("¿a no es igual a b?", a != b);  // true

// // Operador de mayor que (>)
// console.log("¿a es mayor que b?", a > b);  // false

// // Operador de menor que (<)
// console.log("¿a es menor que b?", a < b);  // true

// // Operador de mayor o igual que (>=)
// console.log("¿a es mayor o igual que b?", a >= b);  // false

// // Operador de menor o igual que (<=)
// console.log("¿a es menor o igual que b?", a <= b);  // true

/*
(===): Igualdad estricta:, compara si los valores son iguales y el tipo de dato.
*/

let numero4 = 10;
let texto1 = "10";

console.log(numero4 === texto1);



/*
(!=): Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión
*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){

    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

/**
 (!===) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor
 */

 let numero5 = 10;
 let numero6 ="10";

 if (numero5 !== numero6){
    console.log("Son diferentes");
 } else{
    console.log("Los valores son iguales");
 }


 let numero7 = 41;
 let numero8 = "50";

 if(numero7 !=== numero8){
    console.log("Los valores son diferentes");
 } else{
    console.log
 }

 /*
 En igualdad: ==, y desigualdad: !=
En igualdad estricta: ===, y desigualdad estricta: !==
(Es como sustituir el primer "=" por un "!")
 */

/(!=) Desigualdad o destino. Este verifica si dos valores no son iguales y de ser necesario realiza la conversión/

let precioCaja = 1499;
let precioMax = 1500;

if (precioCaja != precioMax) {
    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio máximo permitido");
}

let número5 = 10;
let número6 = "10";

if (número5 != Number(número6)) {
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");
}

/* (!==) Desigualdad Estricta. Verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mmismo tipo y valor*/

let número7 = 41;
let número8 = "50";

if (número7 !== número8) {
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}

// (>): Mayor que basicamente nos indica si un valor es mayor que otro

let puntuacionFinal = 85;
let puntiacionRequerida = 102;

console.log(puntuacionFinal > puntiacionRequerida);

//(<): Menor que nos indica si un valor es menor que otro

let año = 20;
let edadLimite = 30;

console.log(año < edadLimite);

//(>=) Mayor o igual que y nos dice si un valor es mayor o igual a otro.

let edad = 29;
let|edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(<=)Menor o igual  que nos indica si un valor es menor o igual a otro 

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);



//Ejercicio 1:ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro.


//Ejercicio 2: un programa que pida al usuarios dos palabras y determine si son iguales o no
