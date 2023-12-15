//OPERADORES LÓGICOS
/*
(&&) AND se utiliza cuando las dos condiciones deben cumplir
*/
let mayoriaEdad = 18;
let tieneIdentificacion = true;

if (mayoriaEdad >= 18 && tieneIdentificacion) {
    console.log("Puedes rentar el salón");
} else {
    console.log("No lo puedes rentar");
}

/*
(||) Or se utiliza cuando se debe cumplir una condición u otra.
*/

let esPrime = false; //Se cumple una de las dos condiciones
let descuento = true;

if (esPrime || descuento) {
    console.log("Califica como descuento");  
} else {
    console.log("No califica para descuento");
}

// (!) NOT: Se utiliza para negar el valor de una condición.

let diaLibre = false;

if (!diaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}


//OPERADORES DE CADENA
/*
-toLowerCase: Hace el cambio de nuestra string a minusculas
*/

let mensajeUsuario = "Bienvenidx a la tierra";

let camniMinusculas = mensajeUsuario.toLocaleLowerCase()
console.log(camniMinusculas)

/*
-toUpperCase hace el cambio de nuestro string a mayusculas
*/
let saludo = "Casi viernes, casi Navidad"
let cambioMayusculas = saludo.toUpperCase();

console.log(cambioMayusculas);

//trim quita los espacios de los costados

let aviso =  "    ch35   "
let sinEspacios = aviso.trim();
console.log(sinEspacios)

//toString: consvierte un tipo de dato numbrer a string

let numero = 34;
let cadena = numero.toString();

console.log(cadena);


//concat: Concatena los datos (los junta) 

let nombre = "Lucero";
let apellido = "Rosajel";

let nombreCompleto = nombre.concat(" ", apellido);

console.log(nombreCompleto);


/*
Expresiones

-Expresión aritmética: let operacion = 14 +25 * 12; cobina la suma con la multiplicación.

-Expresión de cadena

let notificacion = "Casi, "Año nuevo"; expresion concatenado

-expresion lógica

let esMayorDeEdad = (23 > 18) && (23 < 65): tiene operadores lógicos y de comparación.

-expresion de asiganción

let frasco = chocolate; asigna el valor a la variable

*/

//EJERCICIO: Quiero saber si puedo hacer Hot Cakes

let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = false;
let tieneLeche = true;

if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  console.log("¡Puedes hacer Hotcakes!");
  console.log("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
  console.log("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
  console.log("Hotcakes listos, ¡a disfrutar! ¡Agrega Nutella al gusto!");
} else {
  console.log("Tssss, te faltan ingredientes para hacer hotcakes.");
  console.log("No es posible hacer hotcakes sin todos los ingredientes.");
  console.log("Ve a conseguirlos, CORREEEE");
}
