package org.generation.calculadora;

public class CalculadoraMain {

	public static void main(String[] args) {
		
		// Instanciar 
		
		Calculadora calculadora = new Calculadora();
		
		//Llamar a los métodos
		
		System.out.println(calculadora.sumar(12, 12));

		System.out.println(calculadora.restar(12, 12));
		
		System.out.println(calculadora.multiplicar(12, 12));
	
		System.out.println( calculadora.dividir(12, 12));
	}

}
