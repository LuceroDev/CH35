package org.generation.persona;

public class Persona {
		// Crear un objeto Persona con los atributos: nombre, apellido, email, edad
	
	public String nombre;
	
	public String apellido;
	
	public String email;
	
	public String edad;
//Constructor
	public Persona(String nombre, String apellido, String email, String edad) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.edad = edad;
	}
	
	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", apellido=" + apellido + ", email=" + email + ", edad=" + edad + "]";
	}

	public String getNombre() {
		return nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public String getEmail() {
		return email;
	}

	public String getEdad() {
		return edad;
	}
	
	// Método de validación de email
    public boolean validarEmail() {
        // Utilizando una expresión regular para verificar el formato del email
        String regex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:gmail\\.com)$";
        return email.matches(regex);
    }
	
	
}
