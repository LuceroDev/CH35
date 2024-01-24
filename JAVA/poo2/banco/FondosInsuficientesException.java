package org.generation.banco;

//En esta clase de definen los métodos que arrojan Exceptiones, siempre que el la clase Cajero se dispare dicah e

/*
 * Requerimientos:
 *  1.Trabajar bajo el paradigma POO
 *  2.Indicar que la clase en una Exception mediante herencia (extends)
 *  3.Crear variables y métodos para iniciar objetos
 *  4.Encapsular
 * 
 * 
 * */
public class FondosInsuficientesException extends Exception {
	private static final long serialVersionUID = 1L; //No es necesario, pero es buena práctica asignarle.
	
	
	
	//Atributos
	private double monto;
	
	//Constructor
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}
	//Getter y Setter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	
	
	
	

}
