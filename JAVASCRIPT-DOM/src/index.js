/*
*Manipulación del Dom.
-Leer y traer nodos del árbol del Dom.
    Vamos a utilizar las propiedades: 
    document.getElementById (Trae elementos por)
    document.getElementByClassName (Trae elelentos por clase)
    document.getElementByTagName (Trae elementos por Etiquetas)
*/

//getElementById
/*const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Este método trae un string (texto que vive en mi id)*/

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la lóngitud de elementos de la clase
console.log(typeof titulos); //Mustra que es un objeto porque es una colección de arrays.

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/* Métodos para llamar elementos mediente selectores de CSS.
Se usa para procesos más específicos y la sintaxis querySelector
    -doceument.querySelector("selector"); //#, ., <>
    -document.querySelectorAll(). Selecciona los elementos que especifiquen.
Siempre van a traer el primer elemento con el selector indicado*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass)

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll)

//Manipular elementos del Dom (styles) con JS

/*titulo.style.textAling = "center";
titulo.style.color = "#5058F2"*/

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación del Dom - CH35"
titulo2.style.color = "#F23D3D"

/* Métodos para crear y agregar elementos en el DOM. Este elemento se divide en dos: "Crear el nodo y agregar el nodo".
    -Crear nodos     
        * document.createElement("element")--> Crea elementos a partir de etiquetas.
        * document.createTextNode("text")--> Crea texto dentro de las etiquetas.
*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -Agregar nodos
        *parentElement.appendChild(const);
        *parentElement.append(const);
        *parentElement.insertBefore(const);
        *parentElement.insertAdjacentElement(const);
        *parentElement.insertAdjacentElement(const);
    Utilizaremos matormente appenChild
*/

//Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//Crear el texto que vivirá en el nodo 1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Insertar el texto en el nodo 1
nodo1.appendChild(textNodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "Karla, sans-serif";
//parentElement-style.color ="#201226"

 /*
 Agregar imagen

 */
//Insertar el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Acceder a las propiedades de la imagen
imgNodo.src = "../src/assets/gatito.jpg";
imgNodo.width = "300px";

/*
Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/

const elementoOuter = titulo2.outerHTML
console.log(elementoOuter);
titulo2.innerHTML = "Manipulación del Dom - CH35"
