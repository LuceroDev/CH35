package org.generation.exceptions;

public class Division {
    // Método para dividir
    private static int dividir(int numerador, int denominador) {
        if (denominador == 0) {
            throw new ArithmeticException("Error: no puedes dividir entre 0");
        }
        return numerador / denominador;
    }

    public static void main(String[] args) {
        /*
         * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente a los errores.
         * Utiliza una estructura de control try-catch que permite manejar las excepciones.
         *  - try : Envuelve el código que puede generar una excepción y lo evalúa.
         *  - catch : Contiene el código que se ejecuta cuando se lanza la excepción.
         *  	Sintaxis:
         *  		try {
         *  			//Código protegido
         *  		} catch (ExceptionName e){
         *  			//Bloque de excepción
         *  		}
         *  - finally : Siempre se ejecuta. Se utiliza para mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally
         */

        // Exception que se arroja si un número se divide entre 0
        try {
            int resultado = dividir(10, 0);
            System.out.println("El resultado de la división es " + resultado);
        } catch (ArithmeticException e) {
            System.out.println("\u001B[31m" + e.getMessage() + "\u001B[0m");
        } finally {
            System.out.println("\u001B[32mPrograma finalizado\u001B[0m");
        }
    }
}

