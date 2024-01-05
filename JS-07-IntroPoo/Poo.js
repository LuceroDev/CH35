/* 
*Paradigmas de programación 

Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.

Programación basada en eventos: se basa en la gestion y respueta de eventos.

Programación declarativa: Explicar lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).
*/

//?Clases: Plantillas para crear objetos. Nos ayudan a definir  un tipo de objeto y crear instancias de este tipo de objeto.

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
    //*objetos
    //El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos.
    //Para inicializar un objeto es necesario definir un constructor que tomará los atributos

    /*clases = molde del objeto = gomita constructora = chefsitx atributos= ingredientes metodos=comportamientos*/

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }//El costructor solo toma en cuenta los atributos, no toma los métodos


    comer() {
        console.log("Bon apetit");
    }//metodo comer

    bailar() {
        console.log("Dale hasta el suelo");
    }//metodo bailar

    cantar() {
        console.log("Amo cantar");
    }//metodo cantar

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);

    }
}

let usuario1 = new persona("Lucero", "Soriano", 24, "lu0sorjel@gmail.com", "5566778899");
let usuario2 = new persona("Louis", "Tomlinson", 31, "louis@onedirection.com", "87348744787");
let usuario3 = new persona("Niall", "Horan", 30, "niall@onedirection.com", "8487827844");
let usuario4 = new persona("Liam", "Payne", 30, "liam@onedirection.com", "7746282758");
let usuario5 = new persona("Harry", "Styles", 29, "harry@onedirection.com",
    "7687903840");
let usuario6 = new persona("Zayn", "Malik", 30, "zayn-malik@onedirection.com", "1234567890");

console.log(usuario5);//Imprimir objeto completo
console.log(usuario4.email);//Imprimir un atributo en específico
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email, usuario6.email);

usuario5.comer();//Invocar el método
usuario5.bailar();
usuario2.cantar(), usuario3.cantar();

usuario5.mostrarInfo();//Mustra todos sus atributos
console.log(usuario3.telefono, usuario5.apellido);

//*Pilares de la programación orientada a objetos
/*
?Herencia
?Polimorfismo
?Encapsulamiento
?Abstracción

*/
/* 
?Herencia: 
Nos permite heredar a clases inferiores para poder optimizar el programa.
*/

/*class arrendadxr extends persona { //Esta es una subclase con sus atributos. Esta subclase va a heredar atributos de la clase persona
    capacidad = 0;//Estos atributos no son heredados
    costo = 0;
    nombreLugar = "";  

    constructor(){
        super(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar); //super recopila los que tenemos anteriormente
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar
    }
    
mostrarInfo(){
    console.log("Capacidad", this.capacidad);
    console.log("Costo", this.costo);
    console.log("Nombre del lugar", this.nombreLugar);
}
}

let arrendadxr1 = new arrendadxr ("Rocio", "Hernandez", 29, "rocio@gmail.com", "5523456798", 100, 50000, "Salon G" )

console.log(arrendadxr);
console.log(arrendadxr.costo);*/

//*Otro ejemplo:
class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();
gato.sonido();

/*
*Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulados en común
Dar cambios a nustros objetos aun estando en distintas clases.
Nos da la posibilidad de cambiar aun si no estan en la misma clase

*====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.
*/

class producto {
    marca = "";
    precio = 0;

    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion() {
        console.log("Marca "), console.log("Precio");
    }
}

let producto1 = new producto ("cerave", 85);

//*>>>>>>>>>>>Encapsulamiento<<<<<<<<
/*
Oculta la implementación de un objeto y solo mostrar los datos necesarios
*/

class Usuario {
    #contraseña;

    constructor(userName, correo, contraseña) {
        this.userName = userName
        this.comer = correo;
        this.contraseña = contraseña;
    }



verificarContraseña(contraseña){
    return this.#contraseña === contraseña;
 }

}

/* 
*Abstracción 
No es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos
*/
/*
Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch
*/

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

/*
*Principio Solid
1. Principio de responsabilidad unica (Single Responsability Principle)
Una clase de tener asignada una tarea o responsabilidad específica y esto no debería cambiar.

2Principio abierto/cerrado (open/closed  priciple OCP)
Una clase puede estar abierta a extenciones yagregar nuevas funcionalidades, pero sin generar cambios en la misma.


3. Principio de sustitución de Liskov (Liskov Suntitution Priciple LSP)
Una clasehijo puede sustituir objetos de una clase padre.

4. Principio de segregación de interfaces (Interface segregation Principle ISP)
Delimitamos los metodos para desarroolar nustros objetos.

Delimita los metodos que necesito y dejar fuera los innecesarios

5. Principio de inversión de dependencias (Dependency Inversion Principle DIP)

*/
//*Investigar el quinto principio
/*
El Principio de Inversión de Dependencias (DIP) sugiere dos reglas:

Módulos de alto nivel no deben depender de módulos de bajo nivel, ambos deben depender de abstracciones.
Abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.
Esto se traduce en que las clases de alto nivel no deben depender directamente de las clases de bajo nivel. Ambas deben depender de abstracciones, y las implementaciones concretas deben depender de esas abstracciones. Esto mejora la flexibilidad y el mantenimiento del código al reducir las dependencias directas entre componentes.
*/

/*
*Ejercicio: 
*Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificación. Definir los métodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no.

Atributos
Nombre
Calificación

Métodos
imprimirCalificacion
evaluacion

la calificación aprobatoria es de 6
if para evaluar la calificación
*/

class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Calificación: ${this.calificacion}`);
    }

    evaluacion() {
        if (this.calificacion >= 6) {
            console.log(`${this.nombre} ha aprobado.`);
        } else {
            console.log(`${this.nombre} no ha aprobado.`);
        }
    }
}

// Código a prueba
const nombreAlumno = prompt("Ingrese el nombre del alumno: ");
const calificacionAlumno = parseFloat(prompt("Ingrese la calificación del alumno: "));

const alumno = new Alumno(nombreAlumno, calificacionAlumno);

// Imprimir calificación del alumno
alumno.imprimirCalificacion();

// Evaluar si el alumno aprobó o no
alumno.evaluacion();
