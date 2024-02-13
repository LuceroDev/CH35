package org.generation.manager;

public class ManagerMain {

	public static void main(String[] args) {
		Manager Fernanda = new Manager("Fernanda Ramos", 136, 45365.20d, "Manager", 1);
		System.out.println(Fernanda);

		
		//Método calcular salario
		Fernanda.calcularSalario();
	}

}
