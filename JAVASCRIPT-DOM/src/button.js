//Documentación: https://developer.mozilla.org/es/docs/Web/CSS/visibility

const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");
//Agregando estilos al container para visibilidad
container.style.visibility = "visible";

//Manejando eventos para ocultar el container desde el botón
button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
})

/*
*Explicación: 
Esta línea de código está cambiando la propiedad visibility del elemento referenciado por container. La propiedad visibility controla si un elemento es visible o no en la página. Puede tener uno de los dos valores: "visible" o "hidden".

La expresión dentro de los paréntesis (container.style.visibility === "visible") está verificando si la propiedad visibility actual del elemento es "visible". Si es así, entonces se establece a "hidden"; de lo contrario, se establece a "visible".
*/
/*Documentació: https://es.javascript.info/mouse-events-basics

https://platzi.com/tutoriales/1099-fundamentos-javascript-2017/2562-eventos-del-mouse-en-javascript/

https://naviscode.com/blog/eventos-de-teclado-en-javascript*/

