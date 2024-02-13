package org.generation.user.service;

import java.util.ArrayList;
import java.util.List;

import org.generation.user.model.User;
import org.springframework.stereotype.Service;

/*En Service definimos los servicios de la base de datos. Emulamos una CB utilizando un ArrayList para realizar las operaciones del CRUD, aunque solo vamos a realizar Read mediante un protocolo HTTP GET
 * 
 * Para definir nustra clase de Java como un service, utilizamos la anotación @Service.
 * */

@Service
public class UserService {
	//Crear el ArrayList en donde van a vivir todos los usuarios que quiera agregar
	
	public final List <User> usuario = new ArrayList<>();
	
	//Instanciar los objetos User en un método llamado usuarios
	
	public UserService() {
		usuario.add(new User (1L, "Daniel", "Maldonado", "daniel@gmail.com", "patito123"));
		usuario.add(new User (2L, "Braulio", "Santiago", "braulio@gmail.com", "braulito"));
		usuario.add(new User (3L, "Rey David", "Martinez", "elrey@gmail.com", "lasmañanitas"));
		usuario.add(new User (4L, "Eveida", "Palos", "eve.p@gmail.com", "candycrush3000"));
		usuario.add(new User (5L, "Rodrigo", "Macedo", "rodri.m@gmail.com", "contraseña"));
		usuario.add(new User (6L, "Lizbeth", "Ceron", "lizbeth.c@gmail.com", "generationmx"));
		usuario.add(new User (7L, "Fernanda", "Carmona", "fer.car@gmail.com", "zorritonaranja"));
		usuario.add(new User (8L, "Ruben", "Aleman", "r.aleman@gmail.com", "patito55555"));
		usuario.add(new User (9L, "Gonzalo", "Piña", "gon.pinha@gmail.com", "mentasboutique"));
		usuario.add(new User (10L, "Eunice", "Ceja", "eun.ceja@gmail.com", "4_perritos"));
	}

	
	/*Crear método de tipo Get para traer a todos los usuarios*/
	public List<User> allUsers(){
		return usuario;
	}
}
