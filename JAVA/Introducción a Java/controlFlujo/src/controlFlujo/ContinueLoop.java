package controlFlujo;

public class ContinueLoop {

	public static void main(String[] args) {
		
		/*
		 * Instruccciones de salto
		 * Continue: Interrumpe la interacción del bucle, si se procede una condición específica y continua con la siguiente.
		 */
		
		//Con continue, ejecutando la sentencia condicional, pero cumplienro la condición del bucle for.
		 for (int cliente = 1; cliente <= 20; cliente++) {
	            if (cliente == 5) {
	                System.out.println("Cliente número " + cliente + " Ganaste!!!");
	                continue;
	            }

	            System.out.println("Eres el cliente número " + cliente);
	        }
	    }
	}