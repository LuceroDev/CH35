package collections;

import java.util.HashSet;

public class HashSetCollection {

    public static void main(String[] args) {
        // HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos.

        HashSet<String> animal = new HashSet<String>();

        animal.add("Buho");
        animal.add("Caballo");
        animal.add("Perro");
        animal.add("Gato");
        animal.add("Ornitorrinco");
        animal.add("Cebra");
        animal.add("Ornitorrinco");
        animal.add("Mapache");
        animal.add("Capibara");
        animal.add("Capibara");
        animal.add("Capibara");
        animal.add("Capibara");
        animal.add("Capibara");
        animal.add("Capibara");

        // Imprimir el HashSet

        System.out.println(animal);
    }

}

