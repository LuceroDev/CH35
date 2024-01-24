package org.generation.encapsulamiento;

/*
 * La estructura básica para crear objetos es la siguiente
 * 1.Atributos o propiedades
 * 2.Método constructor  (1 -n métodos)
 * 3.Métodos del objeto (comportamiento)
 * 4.Método Getters y Setters
 * 5.Método toString
 * 
 */

public class Employee {
//1. Encapsular Atributos o propiedades utilizando un modificador private
	private String nombre;
	private String apellido;
	private int id;
	private double salario;
	private String puesto;
	
	//2.Encapsular el Método constructor de tipo public
	Employee(String nombre, String apellido, int id, double salario, String puesto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
		}
	//3. Métodos de comportamiento
	
	void trabajar(){
		System.out.println("Estoy trabajando");
	}
	
	void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de " + this.salario + " pesos");
	}
	
	void capacitarse() {
		System.out.println("El trabajador del puesto " + this.puesto + " se capacita");
	}
	
	void infoGeneral() {
		System.out.println("Id: " + this.id + " Nombre: " + this.nombre + " Apellido:" + this.apellido);
	}
	//4. Getters y Setters. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactura con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.

	/*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * 
	 * Podemos inicializar Getters y Setter dando click derecho >Sourse >Generate Getters y Setters >Select All> Generate
	 */
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}
	
	//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nustros objetos en formato String.
	//Podemos inicializar toString das click derecho > Sourse > Generate toString > Fields > Generate

	@Override
	public String toString() {
		return "Employee "
				+ "[nombre=" + nombre + 
				", apellido=" + apellido + 
				", id=" + id + 
				", salario=" + salario
				+ ", puesto=" + puesto +
				"]";
	}
}
 
/*La anotación @Override simplemente se utiliza, para forzar al compilador a comprobar en tiempo de compilación que estás sobrescribiendo correctamente un método, y de este modo evitar errores en tiempo de ejecución, los cuales serían mucho más difíciles de detectar.
 * Documentación: https://es.stackoverflow.com/questions/156432/para-que-sirve-la-l%C3%ADnea-override-en-java
 * */




