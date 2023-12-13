/*Tipos de datos
> -String (cadena de texto)
> - Number (numéricos)
>- Booleans (boleanos: true or false)
>- Null (nulos)
>- Undefined (Indefinidos)
>-Objects (Objects)
>-Objects (Arrays)
*/

/*console.log(); Nos permite visualizar en consola del navegador el código de JS

console.warn(); Mustra un mensaje de advertencia.

console.error(); Mustra un mensaje de error.

console.table();

*/
//Puedo definir mis variables de estas dos maneras:
let firstName;
firstName = "Lucero"
let lastName = "Soriano"
//Puedo concatenar mis dos variables
console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName)

//Otra forma y más optima:
/* ECMAScript 6 (ES6). Interpolación de cadenas
>- backticks  altgr+}
>- Para variables las invocamos así: ${variable}
>- Texto para string
*/
let age = 24;
console.log(`Mi nombre es ${firstName},
mi apellido es ${lastName} 
y tengo ${age} años`);

//console.warn();
console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);

//console.error();
console.error(`Status 404: Failed`);

/* Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
Los arrays se pueden manipular mediante métodos específicos.
Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.

- Un array posee n cantidades de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 = []; //Array vacío
console.log(`Array vacío${arreglo1}`);

//Los elementos de un array se separan mediante comas
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; //Array de String 
console.log(cars);
//Longitud e índices son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0.

console.log(typeof(cars)); //Output: object

//Array de Numbers
let salariesMnx = [15000,45000,30000,12000,50000,17000];
console.log(salariesMnx.length); //Output: 12
console.log(salariesMnx);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age:29,
    country: "Mexico"
}

console.log(employee); 
console.table(employee); //se mustra mi array como tabla
console.table(cars); //se mustra mi array como tabla