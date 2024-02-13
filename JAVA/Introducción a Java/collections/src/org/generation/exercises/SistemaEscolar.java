package org.generation.exercises;
import java.util.Scanner;
import java.util.ArrayList;

/*Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * 
 * --Requerimientos para la creación del programa:
 *   >Utilizar ArrayList
 *   >Utilizar Scanner para interactuar con el usuario y permitir que agregue estidiantes.
 *   >Loop para permitir que se agreguen varios estudientes (do-while).
 *   >Opción para salir del loop con la palabra "Salir" (if-else, try-catch, ≠, switch son posibles opciones).
 *   >Mostrar lista de estudiantes (for-each)
 * 
 * */



public class SistemaEscolar {

	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los estudiantes
		
		ArrayList<String> estudiantes = new ArrayList<String>();

		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante; //inicializando de manera global
		do {
			
			System.out.println("Ingresa el nombre del estudiante.Escribe Salir para finalizar.");
			nombreEstudiante = scanner.nextLine();//Invocando de manera local
			estudiantes.add(nombreEstudiante);
			
		} while(!nombreEstudiante.equals("Salir"));// Siempre que no se escriba 'Salir', el loop se sigue ejecutando.
		
		//Mostrar lista de estudiantes (for-each)
		System.out.println("***Lista de estudiantes");
		for(String estudiante : estudiantes ) {
			//Si no quiero que se muestre la palabra "Salir" voy a agregar una condicional sobre la variable que guarda los elementos que iteran sobre el ArrayList.
			if(!estudiante.equals("SalSir"))
			System.out.println(estudiante);
		}
		scanner.close();
		
		/*
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove()).
		 */
	}

}
