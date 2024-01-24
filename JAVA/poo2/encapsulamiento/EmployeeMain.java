package org.generation.encapsulamiento;

public class EmployeeMain {

	public static void main(String[] args) {
		//Instanciar  los objetos 
		
		Employee Daniel = new Employee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor");
		
		Employee Abigail = new Employee("Abigail", "Martínez", 5274, 19754.20d, "Desarrolladora frontend");
	
		Employee Arturo = new Employee("Arturo", "Avila", 4403, 17999.62d, "Desarrollador backend");
	
	   System.out.println(Daniel);
	   System.out.println(Abigail);
	   System.out.println(Arturo);
	   
	  
	  //Invocando métodos definidos previamnete (trabajar, calcularSalario, capasitarse, ingoGeneral).
	   Daniel.infoGeneral();
	   Arturo.calcularSalario();
	   Abigail.capacitarse();
	   
	   //Utilizar infromación específica de cada objeto mediante sus propiedades.
	   
	   System.out.println(Daniel.getNombre()+ " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto());
	   //Necesitamos traer la información mediente getters ya que los atributos se convertiron en privado
	   System.out.println(Abigail.getPuesto() + " gana $" + Abigail.salario + " pesos");
	   
	   
	   //Actualizando información mediente Setter
	   
	   Arturo.setSalario(24598.11);
	   Arturo.calcularSalario();
	}
		
}
