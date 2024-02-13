package collections;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListeCollection {

	public static void main(String[] args) {
		
		//*******************Arrays**************//
		
		String[]names = {"Jonathan", "Gonzalo", "Fernanda", "Lizbeth", "Arturo", "Uriel", "Martín", "Lucero"};
		//Imprimiendo Arrays
		System.out.println(names);
		
		//Así si lo puedo visualizar en mi consola (importamos import java.util.Arrays;) y usamos el metodo Arrays.toString
		System.out.println(Arrays.toString(names));
		
		int[]edades = {12,3,25,55,69,41,29,37,18};
		System.out.println(Arrays.toString(edades));
		
		
		//Acceder a cada elemento del Array
		
		String name1= names [0];
		System.out.println("El primer nombre de la lista es " + name1);
		int edad1= edades[2];
		System.out.println("La edad de " + name1 + "es de " + edad1 + " años");
		
		//Obtener la longitud del ARRAY
		
		int longitudNames =names.length;
		System.out.println("El Array names tiene " + longitudNames + " elementos");
		
		//Obtener el último elemento de mi Array
		
		/*String ultimoElemento=name[longitudNames - 1];*/
		String ultimoElemento =names[names.length - 1]; //La longitud no vive en una variables
		System.out.println("El último elemento del Array name es " + ultimoElemento); 
		
		//Mostrar cada elemento utilizando forEach (como lista)
		
		for(String name : names) {
		System.out.println(name);
		}
		
		//****************************ArrayList************************
		
		/*ArrayList es una array que puede cambiar de tamaño. Es la clase de Java que representa la estructura de datos de Arrays. Permite elementos duplicadas y recibe varios métodos para su manipulación.*/
		
		ArrayList<String> films = new ArrayList<String>();
		
		ArrayList<Integer> matricula = new ArrayList<>(); //Mhapper Class
		
		//Agregar elementos
		films.add("Inception");
		films.add("The Shining");
		films.add("Pulp fiction");
		films.add("Mr Nodoby");
		films.add("The shutter island");
		films.add("Ready Player One");
		films.add("The fountain");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index); (es un método)
		
		String film1 = films.get(0);
		System.out.println("La primer película e " + film1);
		
		//Modificar un elemento: name.set(index, newValue)
		
		String film3 = films.set(3,"Memento"); //Aquí se hace el cambio
		String film3Get=films.get(3); //Traigo mi nuevo elemento
		System.out.println(film3Get);
		
		//Conocer el tamaño del ArrayListi: name.size(); es un método
		//Es un método de los ArrayList
		int sizeFilms=films.size();
		System.out.println("El tamaño de ArrayList es de " + sizeFilms+ " elementos");
		
		//Agregar un elemento y después eliminarlo: name.remove(index)
		films.add("Nemo");
		System.out.println(films);
		
		films.remove(7);
		System.out.println(films);
		
		//Mostrar lo elementos del Array en lista
		System.out.println("***Films en lista***");
		for(String film : films) {
			System.out.println(film);
		}
		
		
		
	}

}
