//*Programación Sincronica
function two() {
    console.log("dos");
}

function one() {
    console.log();
    two();
    console.log("tres");
}

one();
console.log("*******************");
//*Programación asíncrona.
/* setTimeout que recibe una función anónima y establece un tiempo de ejecución para cumplir con la condición de asincronismo. */
const twoAsync = () => {
    setTimeout(() => {
        console.log("dos Async");
    }, 5000);

}

const oneAsync = () => {
    setTimeout(function () {
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();

/*
*Trabajando con promesas mediante Fetch API

 */
const url = "https://jsonplaceholder.typicode.com/users" // Api
// >- Usando fetch para mostrar en consola
fetch(url)
    //Si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuarios de la API
        console.log(data[0].name);//Mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
    })
    .catch(error => console.log("¡Ups!, algo salió mal", error)); //Mensaje de error

// *Usando fetch para mostrar en el navegador.
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API: Debe ser de tipo null
let post = null;
//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response; //Guarda los datos de response en la variable de tipo null, para que modificar el dato.
            //Mandamos a llamar a la variable desde la función (peeeero, ese no la hemos hecho, hay que hacerla)
            mostrarDatos(post);

        })
        .catch(error => console.error("¡Problemas", error));
});



//Función que me permita manipular la variable de tipo null
//Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

// *Usando fetch para postrar en navegador PRODUCTOS
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;
botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response
            //Funcion por definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidado!", error))
})
//Función para crear productos, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mando llamar las llaves de title, price, description, category, image desde la API
    productos.map((productos) => {
    const imagen = document.createElement("img")
    const titulo = document.createElement("h2")
    const precio = document.createElement("h3")
    const descripcion = document.createElement("p")
    const categoria = document.createElement("p")
    const separador = document.createElement("hr")


//Enviar a HTML con innerHTML
imagen.src = productos.image;
imagen.width = 200;
titulo.innerHTML = productos.title;
precio.innerHTML = productos.price;
descripcion.innerHTML = productos.description;
categoria.innerHTML = productos.category;

//Mostrarlos en navegador al agregarlos a su padre
tienda.appendChild(imagen);
tienda.appendChild(titulo);
tienda.appendChild(precio);
tienda.appendChild(descripcion);
tienda.appendChild(categoria);
tienda.appendChild(separador);
})
}

//*Metodo POST utilizando fetch. Me permite crear recuros en la API
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo POST
    method: "POST",
    //Creo el body de mi nuevo objeto siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas eléctricas",
        body: "Author: Phillipe K. Dick"
    }),
    //Definir headers
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => {
     console.log(json)
    })
/*>>>>>>>>>>>>Pogramación asíncrona (promise)<<<<<<<<<<<<*/
//*PROGRAMACIÓN ASÍNCRONA
//Función flecha de tipo async-await
//Indico que es una función asíncrona con la palabra async antes de los parámetros
const getUser = async() => {
    //Para que se cumpla la promesa, no utilizamos then, sino que usamos try. Para errores, se sigue utilizando caatch
    try {
        //Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que recibe  un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Mi promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error inexplicable", error);
    }

}
//Invocar función, por favor, que no se nos olvide
getUser();


/*
>>>>>>>>>>>>>>>>>>>LocalStorage<<<<<<<<<<<<
Nos permite crear, modificar, eliminar, guardar objetos de JavaScript de manera local (en el equipo)
*/
//*LOCALSTORAGE
//Crear un objeto de JS con sus llaves y valores
const user = [
{
    id: 1,
    nombre: "Daniel",
    apellido: "Maldonado",
    email: "daniel@generation.com",
    posicion: "instructor",
    empresa: "Generation"
},
{
    id: 2,
    nombre: "Lucero",
    apellido: "Soriano",
    email: "lu0sorgel@gmail.con",
    posicion: "practicante",
    empresa: "Google"   
}
]

//Convertir el objeto creado a notación JSON y almacenar en el localStorage
localStorage.setItem("usuario", JSON.stringify( user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${users[1].nombre} con posición ${users[1].posicion}, trabaja en ${users[1].empresa}`);
