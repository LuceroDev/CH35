package org.generation.overloading;
import java.math.BigDecimal;


public class SumaMain {
	public static void main(String[]args) {
		//Invocando el métodos de tipo static mediante su clase y no mediante la instancia de un objeto
		int suma1 = Suma.sumar(8, 5);
		double suma2 = Suma.sumar(4.3,6.26);
		
		//Para imprimir BigDecimal, debemos guardar los valores de los parámetros en objetos de tipo BigDecimal y asignarlos con argumentos de String de cada nueva instancia.
		
		
		BigDecimal num1 = new BigDecimal("4.3");//Primer objeto instanciado
		BigDecimal num2 = new BigDecimal("6.26"); //Segundo objeto instanciado
		
		//Mando a llamar los objetos instanciados de BigDecimal como los parámetros del método
		
		BigDecimal suma3 = Suma.sumar(num1, num2);
		
		
		System.out.println("La suma de enteros me da " + suma1);
		System.out.println("La suma de decimales me da " + suma2);
		System.out.println("El resultado exacto de la suma  es " + suma3);
		
	}
	
	
}
