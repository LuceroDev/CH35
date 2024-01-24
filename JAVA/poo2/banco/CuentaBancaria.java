package org.generation.banco;
/*
 * En esta clase se definen los métodos para disparar las excepciones , es decir, el try-catch. Sin embargo, aquí no se va a ejecutar el try-catch sino que se va a aplicar ej cajero.
 * 
 * Se definen otros métodos como depositar dinero, retirar dinero.
 * 
 * Requerimientos:
 * 		-Trabajar bajo POO
 * 		-Encapsular(modificadores, getters y setters)
 * 		-Crear variables y métodos para instanciar objetos
 * 
 * 
 * 
 * */
public class CuentaBancaria {

	private double saldo;
	private int idCuenta;
	
	
	//Constructor que recibe solamente el atributo idCuenta
	
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}
//Método para depositar dineros
	
	public void depositar (double monto) {
		saldo += monto; //Esto es lo mismo que = saldo + monto
	}
	
	//Método para retirar dineritos
	
	/*
	 * Verificar si el monto a retirar es menor o igual al saldo actual.
	 * 		-true: Se puede retirar el monto solicitado
	 * 		-false: No se puede retirar y calculamos cuánto dinero falta para completar la operación.
	 * */
	public void retirar (double monto)throws FondosInsuficientesException  {
		
		if (monto <= saldo) {
			saldo -= monto; //Esto es lo mismo que saldo = saldo -monto;
		} else {
			double faltante = monto-saldo;
			//Crear la instancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parpametro correspondiente a la variable a disparar la excepción.
			
			throw new FondosInsuficientesException(faltante); //Esto nos va a marcar un error, porque queremos instanciar de manera local y no lo encuentra, para ellos necesitamos "Heredarlo" como parte del método con la palabra reservada throws y el nombre de la excepción.
		}
		
	}
	//Getters y Setters 
	
	/*Estos métodos son utilizados para obtener el valor actual de los atributos de la clase desde fuera de la misma. En tu caso, getSaldo devuelve el valor del atributo saldo y getIdCuenta devuelve el valor del atributo idCuenta.

Setter (setSaldo, setIdCuenta): Estos métodos son utilizados para modificar el valor de los atributos de la clase desde fuera de la misma. En tu caso, setSaldo establece el valor del atributo saldo con el valor proporcionado como argumento, y setIdCuenta hace lo mismo con el atributo idCuenta.*/
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
	
}
