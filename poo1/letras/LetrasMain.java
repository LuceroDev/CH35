package org.generation.letras;

public class LetrasMain {
	public static void main(String[] args) {
		//Instanciar objetos (Letras y Contador
		
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto y te mostraré el número de vocales, constantes, símbolos y números");
		String palabra = letras.leerEntrada(); //Aquí guardamos el texto introducido por el usuario en una variable.
		
		//Invocar los métodos que me permiten contar los caracteres
		Contador contador = new Contador();
	
		
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " numeros");
		
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolos + " simbolos");
	}

}
