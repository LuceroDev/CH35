package controlFlujo;
import java.util.Scanner;
public class FlujoControl {

    public static void main(String[] args) { // Debe coincidir la clase con el nombre del documento/proyecto

        // Recuerda que para que algo se ejecute, siempre debe ir en el método principal

        // Primero defino variable del tipo String donde se almacena un dato
      /*  String viaje = null; // Dejo en null y después agrego fecha
        // Variable declarada e inicializada en null a propósito, para tener un espacio de memoria ya asignado y solo reemplazarlo con un nuevo dato.

        // Para validar si podemos viajar en cierta fecha
        if (viaje != null) { // variable vacía
            System.out.println("Ya no tenemos fechas disponibles, una disculpa");
        } else {
            System.out.println("Puedes planificar tu viaje, tenemos fechas disponibles");
        }*/
    	//===================================================================
    	
    	
    	//Validacion de contraseña
    	//Scaner es una clase que nos permite obtener informacion del usuario, hay que importarla antes de aplicar. System.in significa que va a traer algo que va a entrar a mi sistema
    			Scanner scanner = new Scanner(System.in);
/*
    	        // Solicitar la primera contraseña
    	        System.out.print("Ingrese la contraseña: ");
    	        String contraseña1 = scanner.nextLine();
    	        //nextLine nos ayuda a ingresar un tipo de caracteres. es un método

    	        // Solicitar la segunda contraseña
    	        System.out.print("Ingrese la contraseña nuevamente: ");
    	        String contraseña2 = scanner.nextLine();

    	        // Verificar si las contraseñas coinciden
    	        if (contraseña1.equals(contraseña2)) {
    	            System.out.println("Las contraseñas coinciden. Acceso permitido.");
    	        } else {
    	            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
    	        }

    	        // Cerrar el scanner
    	        scanner.close(); */

    	//========================================================
    	
    	//SWITCH
    	//Para seleccionar comida de la dulceria del cine
    	
    	//Selección de opciones, variables que almacena dicha opción.
    /*	int menu = 1;
    	
    	//Crear un menú 
    	System.out.println("Bienvenido a la dulcería, ¿qué desea ordenar?");
    	System.out.println("1. Palomitas");
    	System.out.println("2. Refresco");
    	System.out.println("3. Nachos");
    	System.out.println("4. HotDog");
    	System.out.println("5. Pagar");
    	System.out.println("Seleccione una opción del menú (1-5): ");
    	
    	switch (menu) {
        case 1: 
            System.out.println("Elegiste palomitas para tu combo");
            break;
        case 2:
            System.out.println("Elegiste refresco para tu combo");
            break;
        case 3:
            System.out.println("Elegiste nachos para tu combo");
            break;
        case 4:
            System.out.println("Elegiste HotDog para tu combo");
            break;
        case 5: 
            System.out.println("Usted ha seleccionado pagar su combo");
            break;
        default:
            System.out.println("Opción inválida. Por favor, seleccione una opción válida del menú (1-5).");
            break;
    }*/
    	
    	//crear un menu
    			System.out.println("Bienvenido a la dulcería, que desea ordenar?");
    			System.out.println("1. Palomitas");
    			System.out.println("2. Refresco");
    			System.out.println("3. Nachos");
    			System.out.println("4. HotDogs");
    			System.out.println("5. Pagar");
    			//System.out.println("No contamos con eso en nuestro menu, por favor seleccione un opción valida (1-5).");
    			
    			int menu = scanner.nextInt();
    			switch(menu) {
    			case 1:
    				System.out.println("Usted ha agregado palomitas.");
    				break;
    			case 2:
    				System.out.println("Usted ha agregado refresco a su combo");
    				break;
    			case 3:
    				System.out.println("Usted ha agregado nachos a su combo");
    				break;
    			case 4:
    				System.out.println("Usted ha agregado hotdog a su combo");
    				break;
    			case 5:
    				System.out.println("Usted ha seleccionado pagar su combo");
    				break;
    			default:
    				System.out.println("Por el momento no contamos con esa opcion en nuestro menu, lo invitamos a seleccionar una opcion valida");
    				break;
    			
    			}//switch
    			scanner.close(); 
    			
    			
    	
    	
    	
    } // main

} // clase

