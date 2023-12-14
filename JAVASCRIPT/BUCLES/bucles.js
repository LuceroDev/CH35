console.log("Tema:Bucles");
/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
*====CICLO FOR====*
El ciclo for se repite hasta que la condicion se evalue como false. Crea 3 expresionales opcioanles

  *Sintaxis
     *for (expresioninicial; expresioncondicional;
        expresionactualizacion) {
            Codigo a ejecutar en cada interacción de bucle
        }
        1 Inicialización: se debe inicializar con una variable que será evaluado con la expresión a comparar.
        2 Condición: es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle terminó.
        3 Pasos a realizar:  Son los intervalos que cambiaron la variable inicial mientras esto sea true.
*/

//*Crear un programa para saber cuantos boletos vendemos para una rifa
for(let boleto = 1; boleto <= 25; boleto++) {
    console.log(`Boleto # ${boleto}`);
}

//*Crear un programa para vender bolos con una variable global
let regalos = 1;
for (regalos; regalos <= 20; regalos++){
    console.log(`Vendí ${regalos}`);
}

//*Cuenta regresiva 
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--){
    console.log(`Quedan ${cuentaRegresiva} segundos`);
}

/*
*Recorrer arrays con el ciclo for
Debemos usar indices del arreglo para poder usar el bucle, en indices desde el 0 hasta n y saremos la propiedad Length
*/

const ch35 = ["Rodrigo", "Diego", "Ania", "Rey David", "Arturo", "Eunice"];
for(let i = 0; i < ch35.length; i++){
    console.log(ch35[i]);
}

/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

let comidas = ["Pizza", "Pozole", "Sopes", "Mole"];
for (let comida of comidas) {
    console.log(comida + " - grupo de comida");
}

const fruits = ["Apple", "Banana", "Orange"];
let fruta;
for (fruta of fruits) {
  console.log(fruta);
}

//* sumar numeros del 1 al 20
let suma = 0;
for (let i = 1; i <=20; i++){
    suma += i;
}
console.log(suma);

//* Tabla 5
const tabla = 5;
for(let i = 1; i<= 10; i++) {
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}


/*
*Ciclo While:

*Recorrer un bloque de código siempre que una condición específica sea verdadera.
*Sirve para realizar una tarea repetitiva mientras una condición sea verdadera.
*/

let productos = 5;
while (productos > 0) {
    console.log(productos + " productos vendidos");
    productos--;
}

//*Imprimir numeros
let num1 = 0;
while(num1 < 10){
    num1 ++
    console.log("El numero es " + num1);
}

//DOCUMENTACIÓN: https://dcodingames.com/el-ciclo-while/
