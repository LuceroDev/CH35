package 
;
import java.util.Scanner;
public class ControlFlujo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("BUCLES");
		
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		System.out.println("Bienvenido al cajero City Generation, elija una de nustras opciones disponibles.");
		
		System.out.println("Consultar saldo");
		System.out.println("Ingresar dinero");
		System.out.println("Retirar dinero");
		System.out.println("Salir");
		
		Scanner scr = new Scanner(System.in);
		
		int opcion;
		
		do {
			opcion = scr.nextInt();
			
			switch (opcion) {
			case 1: System.out.println("Consultar saldo");
			break;
			case 2: System.out.println("Ingresar dinero");
			break;
			case 3: System.out.println("Retirar dinero");
			break;
			case 4: System.out.println("Salir, tomar efectivo y/o recibo");
			break;
				default: System.out.println("Por favor elija una opción valida, de nustro menú.");
					break;
				
			}
		} while (opcion != 4);
		
		scr.close();
		

	}

}
