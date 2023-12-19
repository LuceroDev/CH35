/*
*Manipulación del Dom.
-Leer y traer nodos del árbol del Dom.
    Vamos a utilizar las propiedades: 
    document.getElementById (Trae elementos por)
    document.getElementByClassName (Trae elelentos por clase)
    document.getElementByTagName (Trae elementos por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Este método trae un string (texto que vive en mi id)

//getElementsByClassName
const titulos =  document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la lóngitud de elementos de la clase
console.log(typeof titulos); //Mustra que es un objeto porque es una colección de arrays.

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);
