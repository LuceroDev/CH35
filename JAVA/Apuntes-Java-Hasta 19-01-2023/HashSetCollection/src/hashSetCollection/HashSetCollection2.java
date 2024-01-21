package hashSetCollection;
import java.util.Arrays;
import java.util.HashSet;
public class HashSetCollection2 {

	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiden los elementos.
		
				HashSet<String> animals = new HashSet<String>();
				
				animals.add("Buho");
				animals.add("Caballo");
				animals.add("Perro");
				animals.add("Gato");
				animals.add("Ornitorrinco");
				animals.add("Cebra");
				animals.add("Ornitorrinco");
				animals.add("Mapache");
				animals.add("Capibara");
				animals.add("Capibara");
				animals.add("Capibara");
				animals.add("Capibara");
				animals.add("Capibara");
				animals.add("Capibara");
				
				
				//Imprimir el HashSet
				
				System.out.println(animals);
				
				
			//Conocer si un elemento se encuentra dentro del Set: contains();
				System.out.println(animals.contains
						("Capibara"));
				
				//Eliminar un elemento: remove();
				
				animals.remove("Cebra"); //Elimino
				
				System.out.println(animals);//Imprimo el set sin el elemento eliminado
				
				//Agrega un elemento en una sola linea
				animals.addAll(Arrays.asList("Perrito","Gato","Oso","Nahual","Tepezcuintle"));
				System.out.println(animals);
				
				//Limpia toda la lista
				animals.clear();
				System.out.println(animals);
				
				//Vuevlo a agregar elementos
				animals.addAll(Arrays.asList("Perrito","Gato","Oso","Nahual","Tepezcuintle"));
				System.out.println(animals);
				
				
				
				/**
				 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
				 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
				 */
				
	}

}
