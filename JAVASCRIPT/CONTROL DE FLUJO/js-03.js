console.log("Hola CH35");
/*
*CONTROL DE FLUJO Y ESTRUCTURAS DE CONTROL

-Las estructuras de control son un conponente fundamnetal dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

 */

//*Declaración de sentencia if-else
/*La palabra reservada if para la declaración, se coloca un parentecis () donde se debe colocar una expresión lógica (true false), se abre y cierran llaves{} para indicar que sentencia va a ejecutar si la condición se cumple (true), despues de la llave ^{} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones de un () *simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).*/

let n = 15;
if (n > 10) {
    console.log(true);
} else {
    console.log(false)
}


/*
Para determinar si una persona es mayor de edad o no

if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

//if anidados
//Queremos corroborar si nuestro usuario es mayo de edad pero no tan mayor de edad
/*
Si la edad es menor de 18 años, imprime "Eres menor de edad, retírate."
Si la edad es igual o mayor a 18 pero menor de 65, imprime "Eres un adulto joven."
Si la edad es 65 o más, imprime "Eres un adulto mayor." */
let edad = 28;
if (edad < 18) {
    console.log("Eres menor de edad, retirate");
} else if (edad >= 18 && edad < 65){  //Con el else if anido otra condición
    console.log("Eres un adulto joven");
} else {
    console.log("Eres un adulto mayor")
}


//Sentencia switch
/*
*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación.
*Es bastante parecida a la sentencia if-else, pero va a ser diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (partición de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso específico, será nustra secuencia que se va a ejecutar, dentro de nuestra declaración.

*Declaraciones
*Se empieza por colocar la palabra reservada switch, seguida de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar  que sentencia/caso a ejecutar.
*Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos la sentencia if o con las funciones.
*Dentro de este bloque de código, falta colocar los casos para cada valor que se desea, establecer segun se el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
*cada valor: instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejcecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción
*break: 
*Cuando terminemos de establecer los casos que necesitemos declarar dentro de nustra sentencia, debemos colorcar un valor por defecto, defoult.
*Entonces la ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata ningun otro dentro de la sentencia en ninguno de los casos
*defoult: mensaje no disponible.
*/

let dia = "jueves"
switch (dia) {
    case "lunes" :
        console.log("Odio los lunes att: Garfield");
        break;
    case "martes" :
        console.log ("2x1 en Dominos");
        break
    case "miercoles" :
        console.log("Ombliguito de semana");
        break;
    case "jueves" :
        console.log("Casi viernes");
        break;
    case "viernes" :
        console.log("viernes de disfraces");
        break;
    case "sabado" :
        console.log("Sabadrink y taquitos");
        break;
    case "domingo" :
        console.log("Domingo de barbacoa");
        break;
        default :
        console.log("Día desconocido");
        break;

} //termina switch


/*
*Operador ternario

*Expresión condicional if-else más simple y legible
*Principalmente se usa para simplificar condiciones de una sola expresión.
*Tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible.
*Su declaración es la siguiente:
*Palabra reservada var, let, const:
*Se le asigna un nombre como si tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no) la expresión.
*Para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
*Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar.

*/

//Ejemplo de operador ternario
let verificacion = n > 20 ? "Si es mayor" : "No es mayor";
console.log(verificacion);

/*
*Cuando usar if-else o cuando switch?
*if-else: cuando necesitamos tomar decisioens bajo condiciones más flexibles.
*switch: cuando tengamos un conjunto fijo de valores para comparar una expresión.
*/
