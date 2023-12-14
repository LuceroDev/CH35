/*
*"ARRAYS"*

*Un array es una colección de elementos de una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.

*Los array o arreglo se utilizan para almacenar y organizar datos de manera más eficiente.
*/

//* Crear un array de numeros
// Correcto

// Correcto
const numeros = [1, 2, 3, 4, 5];


//*Crear arrays de cadena de texto
// Correcto
const comida = ["Piza", "Pozole", "Sopes", "Mole"];

//Para mandarlo llamar
console.log(comida)

//*Array mixto
const mixto = [
    "pluma",
    8,
    true,
    {nombre: "Lucero"}
];
console.log(mixto)

//*Array vacio
const lista = [];
console.log(lista)

//*Agregar elementos a mi array vacio
lista[0] = "Manzana";
lista [1] = "Jugo";
lista[2] = "Chocolates";
lista [3] = "Takis";
console.log(lista);

//*Otra manera de crear Arrays
const frutas = new Array("Kiwi", "Sandia", "Naranja", "Guanábana", "Fresa");
/*
Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array.
*/
console.log(frutas)

//*Para saber mi longitus de un array
console.log(frutas.length);

//*Acceder a los elementos del Array, acorde a su índice
console.log(frutas[3]);
console.log(frutas[6]); //Undefined

//*Notificar un elemento del array por el índice
const cremeria = ["Queso", "Jamón", "Crema", "Tocino"];
console.log(cremeria);
//Para modificar cremeria/Elementos de cremeria
cremeria[2] = "Queso Oaxaca";
cremeria[3] = "Danonino"; //ten en cuenta que los índices en un array comienzan desde 0. 
console.log(cremeria);

//*Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");

//*Estados: Estado de México, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

//*Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

const estados = ["Estado de México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];
const menu = [estados, platillos];
console.log (menu[0][2]);
console.log(menu[0][0],menu[1][0]);
//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

console.log(`El ${menu [0][3]} se come en ${menu[1][0]}`);

/*
Métodos de Array
*Método de cola (queue). Los metodos de cola implican agregar elementos al final de array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa que el primer elemento añadido es el primer elemento eliminado.

*Vamos a utilizar :
-push
-shift
-unshift

*Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIPO (last-in-first-out) que significa el último elemento añadido es el primero en ser eliminado.
*Vamos a utilizar:
-push
-pop
*/
console.log("Método de Arrays");
const ch35 = ["Dani", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//*pop () Eliminar el último elemento del array
let popch35 = ch35.pop();
console.log(popch35);//Devuleve el dato eliminado
console.log(ch35)//Elimino el dato de la lista

//*push () Agregar al final del Array
let pushch35 = ch35.push("Mony");
console.log(ch35);

//*shift() quitar el primero del array
let shiftch35 = ch35.shift();
console.log(ch35);

//*unshift agregar el principio del array
let unshiftch35 = ch35.unshift("Dani");
console.log(ch35);

//*reverse () cambia el sentido del ordenamisnto del array
let reversech35 = ch35.reverse();
console.log(ch35);


/*
*Investigar:
-sort
-forEach
-slice
-splice
-indexOf
*/

//Documentación: https://es.javascript.info/js
//https://lenguajejs.com/javascript/arrays/que-es/